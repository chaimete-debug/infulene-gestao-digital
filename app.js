const XLSFORM_FIELDS = [
  {
    "type": "calculate",
    "name": "submission_uuid",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "uuid()",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one menu_preencher",
    "name": "menu_preencher",
    "label": "O que deseja preencher?",
    "hint": "Seleccione uma opção",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "pin_esperado",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(${menu_preencher}='plano_cultos_escalas','1234', if(${menu_preencher}='relatorio_cultos','2345', if(${menu_preencher}='registo_financeiro','5678','')))",
    "appearance": "",
    "relevant": "${menu_preencher} = 'plano_cultos_escalas' or ${menu_preencher} = 'relatorio_cultos' or ${menu_preencher} = 'registo_financeiro'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "pin_acesso",
    "label": "PIN de acesso",
    "hint": "Apenas para responsáveis. (Plano de cultos e escalas / Relatório dos cultos)",
    "required": "true",
    "calculation": "",
    "appearance": "password",
    "relevant": "${menu_preencher} = 'plano_cultos_escalas' or ${menu_preencher} = 'relatorio_cultos' or ${menu_preencher} = 'registo_financeiro'",
    "constraint": ". = ${pin_esperado}",
    "constraint_message": "PIN inválido. Peça o PIN ao responsável.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "acesso_ok",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(${pin_acesso} = ${pin_esperado}, 1, 0)",
    "appearance": "",
    "relevant": "${menu_preencher} = 'plano_cultos_escalas' or ${menu_preencher} = 'relatorio_cultos' or ${menu_preencher} = 'registo_financeiro'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "grp_plano",
    "label": "Plano de cultos e escalas",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "field-list",
    "relevant": "(${menu_preencher} = 'plano_cultos_escalas' and ${acesso_ok} = 1)",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "plano_intro",
    "label": "PLANO DE CULTOS E ESCALAS",
    "hint": "Preencha os dados do próximo culto e as principais escalas.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "date",
    "name": "data_culto",
    "label": "Data do culto",
    "hint": "Selecione a data do culto",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "time",
    "name": "hora_inicio",
    "label": "Hora de início",
    "hint": "Preencha: Hora de início",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "time",
    "name": "hora_fim",
    "label": "Hora de término",
    "hint": "Preencha: Hora de término",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "decimal-time(.) > decimal-time(${hora_inicio})",
    "constraint_message": "A hora de término deve ser posterior à hora de início.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one culto_evento",
    "name": "tipo_culto_plano",
    "label": "Tipo de culto",
    "hint": "Preencha: Tipo de culto",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "tipo_culto_plano_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${tipo_culto_plano}, 'culto_evento')",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "espec_culto_plano",
    "label": "Especifique o culto especial",
    "hint": "Preencha: Especifique o culto especial",
    "required": "${tipo_culto_plano} = 'culto_especial'",
    "calculation": "",
    "appearance": "",
    "relevant": "${tipo_culto_plano} = 'culto_especial'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one dia_meio_semana",
    "name": "dia_meio_semana_plano",
    "label": "Selecione o dia",
    "hint": "Preencha: Selecione o dia",
    "required": "${tipo_culto_plano} = 'culto_meio_semana'",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${tipo_culto_plano} = 'culto_meio_semana'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dia_meio_semana_plano_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${dia_meio_semana_plano}, 'dia_meio_semana')",
    "appearance": "",
    "relevant": "${tipo_culto_plano} = 'culto_meio_semana'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "plano_resp_note",
    "label": "Responsáveis",
    "hint": "Selecione na lista de membros (membros.csv).",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one_from_file membros.csv",
    "name": "dirigente",
    "label": "Dirigente",
    "hint": "Preencha: Dirigente",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "value=name label=label",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dirigente_tel",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','Telefone','name', ${dirigente})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "dirigente_tel_manual",
    "label": "Telefone do Dirigente",
    "hint": "Preencha apenas se estiver em branco na lista.",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "string-length(${dirigente_tel})=0",
    "constraint": "regex(., '^(258)?8[234567][0-9]{7}$')",
    "constraint_message": "Número inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dirigente_tel_final",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(string-length(${dirigente_tel})>0, ${dirigente_tel}, ${dirigente_tel_manual})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one_from_file membros.csv",
    "name": "pregador",
    "label": "Pregador",
    "hint": "Preencha: Pregador",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "value=name label=label",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "pregador_tel",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','Telefone','name', ${pregador})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "pregador_tel_manual",
    "label": "Telefone do Pregador",
    "hint": "Preencha apenas se estiver em branco na lista.",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "string-length(${pregador_tel})=0",
    "constraint": "regex(., '^(258)?8[234567][0-9]{7}$')",
    "constraint_message": "Número inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "pregador_tel_final",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(string-length(${pregador_tel})>0, ${pregador_tel}, ${pregador_tel_manual})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dirigente_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','label','name',${dirigente})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "pregador_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','label','name',${pregador})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dirigente_tel_001",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','Telefone','name',${dirigente})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "pregador_tel_001",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','Telefone','name',${pregador})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "local_culto",
    "label": "Local do culto",
    "hint": "Preencha: Local do culto",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "anuncios_culto",
    "label": "Anúncios / Observações",
    "hint": "Separe por ponto e vírgula ou novas linhas.",
    "required": "false",
    "calculation": "",
    "appearance": "long-text",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "escala_acolhimento_note",
    "label": "Escala: Acolhimento",
    "hint": "Se for preciso, adicione nomes fora da lista.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_multiple_from_file membros.csv",
    "name": "acolhimento_membros",
    "label": "Acolhedores (da lista)",
    "hint": "Preencha: Acolhedores (da lista)",
    "required": "false",
    "calculation": "",
    "appearance": "autocomplete",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "value=name label=label",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "acolhimento_existe_fora",
    "label": "Existe acolhedor(a) que não consta da lista?",
    "hint": "Preencha: Existe acolhedor(a) que não consta da lista?",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_repeat",
    "name": "acolhimento_fora_rep",
    "label": "Acolhedores fora da lista",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${acolhimento_existe_fora} = 'sim'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "acolhimento_nome_fora",
    "label": "Nome do(a) acolhedor(a)",
    "hint": "Preencha: Nome do(a) acolhedor(a)",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "acolhimento_tel_fora",
    "label": "Telefone/WhatsApp do(a) acolhedor(a)",
    "hint": "Ex.: 84xxxxxxx",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "regex(translate(., '+ ', ''), '^(258)?8[2-7][0-9]{7}$')",
    "constraint_message": "Formato inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_repeat",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "escala_louvor_note",
    "label": "Escala: Louvor",
    "hint": "Se for preciso, adicione nomes fora da lista.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_multiple_from_file membros.csv",
    "name": "louvor_membros",
    "label": "Líder(es) de louvor (da lista)",
    "hint": "Preencha: Líder(es) de louvor (da lista)",
    "required": "false",
    "calculation": "",
    "appearance": "autocomplete",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "value=name label=label",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "louvor_existe_fora",
    "label": "Existe líder de louvor que não consta da lista?",
    "hint": "Preencha: Existe líder de louvor que não consta da lista?",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_repeat",
    "name": "louvor_fora_rep",
    "label": "Líderes de louvor fora da lista",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${louvor_existe_fora} = 'sim'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "louvor_nome_fora",
    "label": "Nome do líder de louvor",
    "hint": "Preencha: Nome do líder de louvor",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "louvor_tel_fora",
    "label": "Telefone/WhatsApp do líder de louvor",
    "hint": "Ex.: 84xxxxxxx",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "regex(translate(., '+ ', ''), '^(258)?8[2-7][0-9]{7}$')",
    "constraint_message": "Formato inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_repeat",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "coro_dia",
    "label": "Coro do dia",
    "hint": "Separe os nomes com ';' ou vírgula. Ex.: Alberto Mudumbe; Argentina Mudumbe",
    "required": "false",
    "calculation": "",
    "appearance": "long-text",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "obs_escala",
    "label": "Observações adicionais",
    "hint": "Preencha: Observações adicionais",
    "required": "false",
    "calculation": "",
    "appearance": "long-text",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "hora_inicio_hhmm",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(string-length(${hora_inicio})>=5,substr(${hora_inicio},1,5),'')",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "hora_fim_hhmm",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(string-length(${hora_fim})>=5,substr(${hora_fim},1,5),'')",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "culto_datetime",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "concat(${data_culto}, 'T', ${hora_inicio})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "culto_texto",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "concat(format-date(${data_culto}, '%d/%m/%Y'), ' às ', ${hora_inicio_hhmm})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "update_contacts_intro",
    "label": "ACTUALIZAÇÃO DE CONTACTOS (opcional)",
    "hint": "Use esta secção para preencher telefones em falta na lista de membros.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "quer_actualizar_contactos",
    "label": "Deseja actualizar telefones em falta?",
    "hint": "Preencha: Deseja actualizar telefones em falta?",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "grp_actualizar_contactos",
    "label": "Actualizar contactos",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "field-list",
    "relevant": "${quer_actualizar_contactos} = 'sim'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "update_contacts_hint",
    "label": "Adicione um ou mais membros para actualizar o telefone (apenas quando estiver em falta na lista).",
    "hint": "Preencha: Adicione um ou mais membros para actualizar o telefone (apenas quando estiver em falta na lista).",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_repeat",
    "name": "rep_actualizar_contactos",
    "label": "Membro para actualizar",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one_from_file membros.csv",
    "name": "upd_membro",
    "label": "Selecione o membro",
    "hint": "Preencha: Selecione o membro",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "upd_membro_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','label','name', ${upd_membro})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "upd_tel_atual_norm",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(string-length(${upd_tel_atual})=0,'', if(starts-with(${upd_tel_atual},'258'), ${upd_tel_atual}, concat('258', ${upd_tel_atual})))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "upd_tel_novo_norm",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(string-length(${upd_tel_novo})=0,'', if(starts-with(${upd_tel_novo},'258'), ${upd_tel_novo}, concat('258', ${upd_tel_novo})))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "upd_tel_atual",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','Telefone','name', ${upd_membro})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "upd_tel_show",
    "label": "Membro: ${upd_membro_label}\nTelefone actual na lista: ${upd_tel_atual_norm}",
    "hint": "Preencha: Membro: ${upd_membro_label}\nTelefone actual na lista: ${upd_tel_atual_norm}",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "upd_tel_novo",
    "label": "Telefone do membro",
    "hint": "Este número será registado para actualizar a lista de membros.",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "string-length(${upd_tel_atual})=0",
    "constraint": "regex(., '^(258)?8[234567][0-9]{7}$')",
    "constraint_message": "Número inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "upd_export_note",
    "label": "Será registado para actualização: ID=${upd_membro} | Nome=${upd_membro_label} | Novo telefone=${upd_tel_novo_norm}",
    "hint": "Preencha: Será registado para actualização: ID=${upd_membro} | Nome=${upd_membro_label} | Novo telefone=${upd_tel_novo_norm}",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "string-length(${upd_tel_novo})>0",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_repeat",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "registo_financeiro",
    "label": "Registo Financeiro",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "field-list",
    "relevant": "(${menu_preencher} = 'registo_financeiro' and ${acesso_ok} = 1)",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "date",
    "name": "data",
    "label": "Data do movimento",
    "hint": "Preencha: Data do movimento",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one tipo",
    "name": "tipo",
    "label": "Tipo de movimento",
    "hint": "Preencha: Tipo de movimento",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one rubricas",
    "name": "rubrica",
    "label": "Rúbrica",
    "hint": "Filtrado pelo tipo (Entrada ou Saída)",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "tipo=${tipo}",
    "default": ""
  },
  {
    "type": "text",
    "name": "rubrica_outras_saidas",
    "label": "Especificar Rúbrica (quando 'Outras Saídas')",
    "hint": "Preencha: Especificar Rúbrica (quando 'Outras Saídas')",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "${rubrica} = 'Outr'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "Especificar_outras_entradas",
    "label": "Especificar Rúbrica (quando 'Outras entradas')",
    "hint": "Preencha: Especificar Rúbrica (quando 'Outras entradas')",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "${rubrica} = 'outras_entradas'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one fontes",
    "name": "fonte",
    "label": "Fonte",
    "hint": "Preencha: Fonte",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "fonte_outros",
    "label": "Especificar Fonte (quando 'Outras')",
    "hint": "Preencha: Especificar Fonte (quando 'Outras')",
    "required": "${fonte} = 'OUTROS'",
    "calculation": "",
    "appearance": "",
    "relevant": "${fonte} = 'OUTROS'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "departamento_auto_note",
    "label": "Departamento: Administração (automático para Dízimos)",
    "hint": "Preencha: Departamento: Administração (automático para Dízimos)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${tipo} = 'Entrada' and ${rubrica} = 'DIZ'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one departamentos",
    "name": "departamento",
    "label": "Departamento",
    "hint": "Preencha: Departamento",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "not(${tipo}='Entrada' and ${rubrica}='DIZ')",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "departamento_final",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(${tipo}='Entrada' and ${rubrica}='DIZ', 'ADMIN', ${departamento})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "departamento_final_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${departamento_final}, 'departamentos')",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one contas",
    "name": "conta",
    "label": "Conta",
    "hint": "Preencha: Conta",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one metodos",
    "name": "metodo",
    "label": "Método de pagamento",
    "hint": "Preencha: Método de pagamento",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one doc_tipos",
    "name": "documento_tipo",
    "label": "Tipo de documento",
    "hint": "Preencha: Tipo de documento",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "documento_numero",
    "label": "N.º do documento",
    "hint": "Preencha: N.º do documento",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "beneficiario",
    "label": "Beneficiário / Entidade",
    "hint": "Preencha: Beneficiário / Entidade",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "descricao",
    "label": "Descrição",
    "hint": "Preencha: Descrição",
    "required": "false",
    "calculation": "",
    "appearance": "multiline",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one moedas",
    "name": "moeda",
    "label": "Moeda",
    "hint": "Preencha: Moeda",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": "MZN"
  },
  {
    "type": "decimal",
    "name": "cambio",
    "label": "Câmbio",
    "hint": "Preencher se a moeda não for MZN",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${moeda} != 'MZN'",
    "constraint": ". >= 1",
    "constraint_message": "O câmbio deve ser ≥ 1.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "decimal",
    "name": "valor",
    "label": "Valor",
    "hint": "Se Rúbrica=Dízimos, este campo não é usado (usa-se o total do repeat).",
    "required": "${rubrica} != 'DIZ'",
    "calculation": "",
    "appearance": "",
    "relevant": "not( ${rubrica} = 'DIZ' and ${tipo} = 'Entrada')",
    "constraint": ". >= 0",
    "constraint_message": "O valor deve ser ≥ 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "valor_mzn",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(${rubrica} = 'DIZ' and ${tipo} = 'Entrada', ${diz_total_mzn}, if(${moeda} = 'MZN', ${valor}, ${valor} * ${cambio}))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "file",
    "name": "anexo",
    "label": "Anexo do documento",
    "hint": "Preencha: Anexo do documento",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "mes",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "number(format-date(${data}, '%n'))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "trimestre",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(number(format-date(${data}, '%n')) <= 3, 1, if(number(format-date(${data}, '%n')) <= 6, 2, if(number(format-date(${data}, '%n')) <= 9, 3, 4)))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "ano",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "number(format-date(${data}, '%Y'))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "timestamp",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "now()",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "instanceID",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "uuid()",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "dizimos_repeat",
    "label": "Dízimos (linhas)",
    "hint": "Preencha apenas quando Rúbrica=Dízimos",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${menu_preencher} = 'registo_financeiro' and ${acesso_ok} = 1) and (${rubrica} = 'DIZ' and ${tipo} = 'Entrada')",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_repeat",
    "name": "dizimistas",
    "label": "Contribuições de Dízimos",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one modo_id",
    "name": "modo_ident",
    "label": "Como identificar o dizimista?",
    "hint": "Preencha: Como identificar o dizimista?",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": "csv"
  },
  {
    "type": "select_one_from_file membros.csv",
    "name": "dizimista_id",
    "label": "Dizimista (CSV)",
    "hint": "Pesquise por nome/código",
    "required": "${modo_ident} = 'csv'",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${modo_ident} = 'csv'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dizimista_nome_csv",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros','label','name', ${dizimista_id})",
    "appearance": "",
    "relevant": "${modo_ident} = 'csv'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "dizimista_nome_manual",
    "label": "Nome do dizimista",
    "hint": "Preencha: Nome do dizimista",
    "required": "${modo_ident} = 'manual'",
    "calculation": "",
    "appearance": "",
    "relevant": "${modo_ident} = 'manual'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "dizimista_nome_final",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(${modo_ident} = 'csv', ${dizimista_nome_csv}, ${dizimista_nome_manual})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "decimal",
    "name": "diz_valor",
    "label": "Valor do dízimo",
    "hint": "Preencha: Valor do dízimo",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". > 0",
    "constraint_message": "O valor deve ser > 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "moeda_ctx",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "${moeda}",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "cambio_ctx",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "${cambio}",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "diz_valor_mzn",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "if(${moeda_ctx} = 'MZN', ${diz_valor}, ${diz_valor} * ${cambio_ctx})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one metodos",
    "name": "diz_metodo",
    "label": "Método de pagamento (dízimo)",
    "hint": "Preencha: Método de pagamento (dízimo)",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "diz_recibo",
    "label": "N.º recibo (dízimo)",
    "hint": "Preencha: N.º recibo (dízimo)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "file",
    "name": "diz_anexo",
    "label": "Anexo do dízimo",
    "hint": "Preencha: Anexo do dízimo",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_repeat",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "diz_total_mzn",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "sum(${diz_valor_mzn})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "diz_n_contribuicoes",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "count(${diz_valor})",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "diz_total_note",
    "label": "Total dos dízimos (MZN): ${diz_total_mzn}",
    "hint": "Preencha: Total dos dízimos (MZN): ${diz_total_mzn}",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "finalizacao",
    "label": "Finalização",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${menu_preencher} = 'registo_financeiro' and ${acesso_ok} = 1)",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one usuarios",
    "name": "registrado_por",
    "label": "Registado por",
    "hint": "Preencha: Registado por",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "grp_relatorio",
    "label": "Relatório dos cultos",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "field-list",
    "relevant": "(${menu_preencher} = 'relatorio_cultos' and ${acesso_ok} = 1)",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "relatorio_intro",
    "label": "RELATÓRIO DOS CULTOS",
    "hint": "Registe os dados do culto realizado.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "date",
    "name": "rel_data_culto",
    "label": "Data do culto",
    "hint": "Preencha: Data do culto",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one culto_evento",
    "name": "tipo_culto_r",
    "label": "Tipo de culto",
    "hint": "Preencha: Tipo de culto",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "tipo_culto_r_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${tipo_culto_r}, 'culto_evento')",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "espec_culto_r",
    "label": "Especifique o culto especial",
    "hint": "Preencha: Especifique o culto especial",
    "required": "${tipo_culto_r}='culto_especial'",
    "calculation": "",
    "appearance": "",
    "relevant": "${tipo_culto_r} = 'culto_especial'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one dia_meio_semana",
    "name": "dia_semana_r",
    "label": "Selecione o dia",
    "hint": "Preencha: Selecione o dia",
    "required": "${tipo_culto_r}='culto_meio_semana'",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${tipo_culto_r} = 'culto_meio_semana'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "time",
    "name": "rel_hora_inicio",
    "label": "Hora de início",
    "hint": "Preencha: Hora de início",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "time",
    "name": "rel_hora_fim",
    "label": "Hora de término",
    "hint": "Preencha: Hora de término",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "(. = '' ) or decimal-time(.) > decimal-time(${rel_hora_inicio})",
    "constraint_message": "A hora de término deve ser posterior à hora de início.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "rel_local",
    "label": "Local do culto",
    "hint": "Preencha: Local do culto",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "integer",
    "name": "rel_participantes_total",
    "label": "Número total de participantes",
    "hint": "Preencha: Número total de participantes",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um número igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "integer",
    "name": "rel_visitantes",
    "label": "Número de visitantes",
    "hint": "Preencha: Número de visitantes",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um número igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "integer",
    "name": "rel_decisoes",
    "label": "Decisões / reconciliações (número)",
    "hint": "Preencha: Decisões / reconciliações (número)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um número igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "integer",
    "name": "rel_baptismos",
    "label": "Baptismos (número)",
    "hint": "Preencha: Baptismos (número)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um número igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "rel_santa_ceia",
    "label": "Houve Santa Ceia?",
    "hint": "Preencha: Houve Santa Ceia?",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "decimal",
    "name": "rel_dizimos_valor",
    "label": "Total de dízimos (MZN)",
    "hint": "Preencha: Total de dízimos (MZN)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um valor igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "integer",
    "name": "rel_dizimistas_qtd",
    "label": "Número de dizimistas",
    "hint": "Preencha: Número de dizimistas",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um número igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "decimal",
    "name": "rel_ofertas_valor",
    "label": "Total de ofertas (MZN)",
    "hint": "Preencha: Total de ofertas (MZN)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": ". >= 0",
    "constraint_message": "Insira um valor igual ou superior a 0.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "rel_total_contribuicoes",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "(if(${rel_dizimos_valor}!='', ${rel_dizimos_valor}, 0)) + (if(${rel_ofertas_valor}!='', ${rel_ofertas_valor}, 0))",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "rel_observacoes",
    "label": "Observações do culto",
    "hint": "Preencha: Observações do culto",
    "required": "false",
    "calculation": "",
    "appearance": "long-text",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "grp_visitantes",
    "label": "Registo de visitantes e membros",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "field-list",
    "relevant": "${menu_preencher} = 'visitantes'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "visitantes_intro",
    "label": "Bem-vindo(a)!",
    "hint": "Escolha se pretende registar-se como visitante ou cadastrar-se como membro efectivo.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${menu_preencher} = 'visitantes'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one tipo_registo_pessoa",
    "name": "registo_tipo",
    "label": "Tipo de registo",
    "hint": "Escolha uma opção",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${menu_preencher} = 'visitantes'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "registo_tipo_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${registo_tipo}, 'tipo_registo_pessoa')",
    "appearance": "",
    "relevant": "${menu_preencher} = 'visitantes'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "nota_visitante",
    "label": "Está a preencher o registo de visitante.",
    "hint": "Por favor, continue com os campos abaixo.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "nota_membro",
    "label": "Está a preencher o cadastro de membro efectivo.",
    "hint": "Por favor, continue com os campos abaixo.",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'membro_efectivo'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "date",
    "name": "data_visita",
    "label": "Data da visita / registo",
    "hint": "Preencha: Data da visita / registo",
    "required": "${registo_tipo}='visitante'",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one culto_evento",
    "name": "tipo_culto_v",
    "label": "Tipo de culto",
    "hint": "Preencha: Tipo de culto",
    "required": "${registo_tipo}='visitante'",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "tipo_culto_v_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${tipo_culto_v}, 'culto_evento')",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "espec_culto_v",
    "label": "Especifique o culto especial",
    "hint": "Preencha: Especifique o culto especial",
    "required": "${tipo_culto_v}='culto_especial'",
    "calculation": "",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'visitante') and (${tipo_culto_v} = 'culto_especial')",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one dia_meio_semana",
    "name": "dia_semana_v",
    "label": "Selecione o dia",
    "hint": "Preencha: Selecione o dia",
    "required": "${tipo_culto_v}='culto_meio_semana'",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "(${registo_tipo} = 'visitante') and (${tipo_culto_v} = 'culto_meio_semana')",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "nome_visitante",
    "label": "Nome e apelido",
    "hint": "Preencha: Nome e apelido",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sexo",
    "name": "sexo_visitante",
    "label": "Sexo (opcional)",
    "hint": "Preencha: Sexo (opcional)",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one faixa_etaria",
    "name": "faixa_etaria",
    "label": "Faixa etária (opcional)",
    "hint": "Preencha: Faixa etária (opcional)",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "faixa_etaria_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${faixa_etaria}, 'faixa_etaria')",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "telefone_whatsapp",
    "label": "Telefone/WhatsApp (opcional)",
    "hint": "Ex.: 84/87/86/85/82xxxxxxx",
    "required": "false",
    "calculation": "",
    "appearance": "numbers",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "(. = '' ) or regex(translate(., '+ ', ''), '^(258)?8[2-7][0-9]{7}$')",
    "constraint_message": "Formato inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "bairro_localidade",
    "label": "Bairro / Localidade (opcional)",
    "hint": "Preencha: Bairro / Localidade (opcional)",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "primeira_vez",
    "label": "É a primeira vez que nos visita?",
    "hint": "Preencha: É a primeira vez que nos visita?",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "primeira_vez_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${primeira_vez}, 'sim_nao')",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one como_conheceu",
    "name": "como_conheceu",
    "label": "Como nos conheceu? (opcional)",
    "hint": "Preencha: Como nos conheceu? (opcional)",
    "required": "false",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "como_conheceu_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${como_conheceu}, 'como_conheceu')",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "quer_contacto",
    "label": "Quer que entremos em contacto consigo?",
    "hint": "Preencha: Quer que entremos em contacto consigo?",
    "required": "true",
    "calculation": "",
    "appearance": "minimal",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "calculate",
    "name": "quer_contacto_label",
    "label": "",
    "hint": "",
    "required": "false",
    "calculation": "jr:choice-name(${quer_contacto}, 'sim_nao')",
    "appearance": "",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "telefone_para_contacto",
    "label": "Telefone para contacto",
    "hint": "Se escolheu \"Sim\", indique um número válido.",
    "required": "${quer_contacto}='sim'",
    "calculation": "",
    "appearance": "numbers",
    "relevant": "(${registo_tipo} = 'visitante') and (${quer_contacto} = 'sim')",
    "constraint": "regex(translate(., '+ ', ''), '^(258)?8[2-7][0-9]{7}$')",
    "constraint_message": "Formato inválido. Use 84xxxxxxx ou 25884xxxxxxx.",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "group_registo_membro_efectivo",
    "label": "Cadastro de membro efectivo",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'membro_efectivo'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "note",
    "name": "aviso",
    "label": "⚠️ Para membro efectivo, seleccione primeiro o nome na lista. Se não encontrar, use o campo manual.",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'membro_efectivo'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one_from_file membros.csv",
    "name": "membro",
    "label": "Selecione o seu nome na lista para actualizar / confirmar",
    "hint": "⚠️ Aqui neste lugar somente  nomes da lista são permitidos. Digite para filtrar.",
    "required": "true",
    "calculation": "",
    "appearance": "autocomplete",
    "relevant": "${registo_tipo} = 'membro_efectivo'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "encontrou",
    "label": "Encontrou o nome na lista?",
    "hint": "",
    "required": "true",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'membro_efectivo'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "Escreve_o_seu_nome_completo",
    "label": "😁Aqui <span style=\"color:green;font-style:Bold;font-family:Rounded MT Bold\">**SIM** </span>podes escrever o teu nome completo",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'membro_efectivo' and ${encontrou} = 'nao'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one fz2qm26",
    "name": "Confirmou_o_nome_que_escreveu",
    "label": "Confirmou o nome que escreveu?",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "${registo_tipo} = 'membro_efectivo' and ${encontrou} = 'nao'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "group_br9vf91",
    "label": "Dados de membro",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "group_ao7in31",
    "label": "Perfil (na igreja)",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one tu47p80",
    "name": "faixa_etaria_membro",
    "label": "Qual é a sua faixa etária?",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'faixa_etaria_membro', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sexo",
    "name": "sexo",
    "label": "Sexo",
    "hint": "",
    "required": "true",
    "calculation": "pulldata('membros', 'sexo', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim')) and ${membro} != ''",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "departamento_001",
    "label": "Departamento ou Ministério",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'departamento', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "grupo",
    "label": "Pequeno Grupo de oração",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'grupo', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "batizado",
    "label": "Já foi Baptizado(a)?",
    "hint": "",
    "required": "true",
    "calculation": "pulldata('membros', 'batizado', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim')) and ${membro} != ''",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "comunhao",
    "label": "Membro em Plena Comunhão?",
    "hint": "",
    "required": "true",
    "calculation": "pulldata('membros', 'comunhao', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim')) and ${membro} != ''",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "group_pq3nu53",
    "label": "Contactos",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "celular_whatsapp",
    "label": "Celular com whatsapp",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'celular_whatsapp', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "outro_nr_celular",
    "label": "Outro número de celular",
    "hint": "Opcional",
    "required": "false",
    "calculation": "pulldata('membros', 'outro_nr_celular', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "email",
    "label": "email",
    "hint": "Opcional",
    "required": "false",
    "calculation": "pulldata('membros', 'email', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "group_ji3rd53",
    "label": "Residência",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "bairro",
    "label": "Bairro onde vive",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'bairro', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "quarteirao",
    "label": "Quarteirão",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'quarteirao', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "cidade",
    "label": "Cidade",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'cnameade', 'bname', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "begin_group",
    "name": "group_pd5ke64",
    "label": "Opcional",
    "hint": "",
    "required": "false",
    "calculation": "",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "select_one sim_nao",
    "name": "casado",
    "label": "Casado(a)",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'casado', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim')) and ${membro} != ''",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "nome_conjuge",
    "label": "Nome conjuge",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'nome_conjuge', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "data_casamento_ou_uniao",
    "label": "Data casamento ou união",
    "hint": "",
    "required": "false",
    "calculation": "pulldata('membros', 'data_casamento_ou_uniao', 'name', ${membro})",
    "appearance": "",
    "relevant": "(${registo_tipo} = 'membro_efectivo') and ((${Confirmou_o_nome_que_escreveu} = 'sim__continuar') or (${encontrou} = 'sim'))",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "text",
    "name": "pedido_oracao_obs",
    "label": "Pedido de oração / Observações (opcional)",
    "hint": "Preencha: Pedido de oração / Observações (opcional)",
    "required": "false",
    "calculation": "",
    "appearance": "long-text",
    "relevant": "${registo_tipo} = 'visitante'",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  },
  {
    "type": "end_group",
    "name": "",
    "label": "",
    "hint": "",
    "required": "",
    "calculation": "",
    "appearance": "",
    "relevant": "",
    "constraint": "",
    "constraint_message": "",
    "parameters": "",
    "choice_filter": "",
    "default": ""
  }
];

const CHOICES = {
  "menu_preencher": [
    {
      "name": "plano_cultos_escalas",
      "label": "Plano de cultos e escalas",
      "order": "1",
      "tipo": ""
    },
    {
      "name": "relatorio_cultos",
      "label": "Relatório dos cultos",
      "order": "2",
      "tipo": ""
    },
    {
      "name": "visitantes",
      "label": "Registo de visitantes e membros",
      "order": "3",
      "tipo": ""
    },
    {
      "name": "registo_financeiro",
      "label": "Registo financeiro",
      "order": "4",
      "tipo": ""
    }
  ],
  "culto_evento": [
    {
      "name": "culto1_dominical",
      "label": "1º Culto Dominical",
      "order": "",
      "tipo": ""
    },
    {
      "name": "culto2_dominical",
      "label": "2º Culto Dominical",
      "order": "",
      "tipo": ""
    },
    {
      "name": "culto_oracao",
      "label": "Culto de Oração",
      "order": "",
      "tipo": ""
    },
    {
      "name": "culto_jovens",
      "label": "Culto de Jovens",
      "order": "",
      "tipo": ""
    },
    {
      "name": "culto_especial",
      "label": "Culto Especial (especifique)",
      "order": "",
      "tipo": ""
    },
    {
      "name": "culto_meio_semana",
      "label": "Culto do Meio da Semana (Quarta-feira / Quinta-feira)",
      "order": "",
      "tipo": ""
    }
  ],
  "dia_meio_semana": [
    {
      "name": "segunda",
      "label": "Segunda-feira",
      "order": "1",
      "tipo": ""
    },
    {
      "name": "terca",
      "label": "Terça-feira",
      "order": "2",
      "tipo": ""
    },
    {
      "name": "quarta",
      "label": "Quarta-feira",
      "order": "3",
      "tipo": ""
    },
    {
      "name": "quinta",
      "label": "Quinta-feira",
      "order": "4",
      "tipo": ""
    },
    {
      "name": "sexta",
      "label": "Sexta-feira",
      "order": "5",
      "tipo": ""
    },
    {
      "name": "sabado",
      "label": "Sábado",
      "order": "6",
      "tipo": ""
    },
    {
      "name": "domingo",
      "label": "Domingo",
      "order": "7",
      "tipo": ""
    }
  ],
  "sim_nao": [
    {
      "name": "sim",
      "label": "Sim",
      "order": "",
      "tipo": ""
    },
    {
      "name": "nao",
      "label": "Não",
      "order": "",
      "tipo": ""
    }
  ],
  "tipo": [
    {
      "name": "Entrada",
      "label": "Entrada",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Saida",
      "label": "Saída",
      "order": "",
      "tipo": ""
    }
  ],
  "rubricas": [
    {
      "name": "OFE",
      "label": "Ofertas",
      "order": "1",
      "tipo": "Entrada"
    },
    {
      "name": "ofertas_1__culto",
      "label": "Ofertas 1º Culto",
      "order": "2",
      "tipo": "Entrada"
    },
    {
      "name": "oferas_2__culto",
      "label": "Oferas 2º Culto",
      "order": "3",
      "tipo": "Entrada"
    },
    {
      "name": "CONTRI",
      "label": "Contribuições",
      "order": "4",
      "tipo": "Entrada"
    },
    {
      "name": "MIS",
      "label": "MNI",
      "order": "5",
      "tipo": "Entrada"
    },
    {
      "name": "ED",
      "label": "Escola Dominical",
      "order": "6",
      "tipo": "Entrada"
    },
    {
      "name": "EVENT",
      "label": "Eventos",
      "order": "7",
      "tipo": "Entrada"
    },
    {
      "name": "DOAC",
      "label": "Doações",
      "order": "8",
      "tipo": "Entrada"
    },
    {
      "name": "Filadelfia",
      "label": "Filadelfia",
      "order": "9",
      "tipo": "Entrada"
    },
    {
      "name": "Jerico",
      "label": "Jerico",
      "order": "10",
      "tipo": "Entrada"
    },
    {
      "name": "Galileia",
      "label": "Galileia",
      "order": "11",
      "tipo": "Entrada"
    },
    {
      "name": "Jerusalem",
      "label": "Jerusalem",
      "order": "12",
      "tipo": "Entrada"
    },
    {
      "name": "Ngalava",
      "label": "Ngalava",
      "order": "13",
      "tipo": "Entrada"
    },
    {
      "name": "Betania",
      "label": "Betania",
      "order": "14",
      "tipo": "Entrada"
    },
    {
      "name": "Kanana",
      "label": "Kanana",
      "order": "15",
      "tipo": "Entrada"
    },
    {
      "name": "Incendiarios",
      "label": "Incendiarios",
      "order": "16",
      "tipo": "Entrada"
    },
    {
      "name": "Ebenezer",
      "label": "Ebenezer",
      "order": "17",
      "tipo": "Entrada"
    },
    {
      "name": "Especial",
      "label": "Grupo Especial",
      "order": "18",
      "tipo": "Entrada"
    },
    {
      "name": "criancas",
      "label": "Crianças",
      "order": "19",
      "tipo": "Entrada"
    },
    {
      "name": "pais",
      "label": "Pais",
      "order": "20",
      "tipo": "Entrada"
    },
    {
      "name": "activistas",
      "label": "Ativistas",
      "order": "21",
      "tipo": "Entrada"
    },
    {
      "name": "idosos",
      "label": "Idosos",
      "order": "22",
      "tipo": "Entrada"
    },
    {
      "name": "outros_min",
      "label": "Outros Ministérios",
      "order": "23",
      "tipo": "Entrada"
    },
    {
      "name": "maes",
      "label": "Mães",
      "order": "24",
      "tipo": "Entrada"
    },
    {
      "name": "especial",
      "label": "Culto Especial",
      "order": "25",
      "tipo": "Entrada"
    },
    {
      "name": "outras_entradas",
      "label": "Outras entradas",
      "order": "26",
      "tipo": "Entrada"
    },
    {
      "name": "treinamento",
      "label": "Treinamento",
      "order": "27",
      "tipo": "Saida"
    },
    {
      "name": "retiro",
      "label": "Retiro",
      "order": "28",
      "tipo": "Saida"
    },
    {
      "name": "avivamento",
      "label": "Avivamento",
      "order": "29",
      "tipo": "Saida"
    },
    {
      "name": "SOC",
      "label": "Ajuda Social",
      "order": "30",
      "tipo": "Saida"
    },
    {
      "name": "SERV",
      "label": "Serviços/Água/Luz/Internet",
      "order": "31",
      "tipo": "Saida"
    },
    {
      "name": "MANUT",
      "label": "Manutenção",
      "order": "32",
      "tipo": "Saida"
    },
    {
      "name": "CONST",
      "label": "Construção/Obras",
      "order": "33",
      "tipo": "Saida"
    },
    {
      "name": "MAT",
      "label": "Materiais/Consumíveis",
      "order": "34",
      "tipo": "Saida"
    },
    {
      "name": "TRANSF",
      "label": "Transferências/Remessas",
      "order": "35",
      "tipo": "Saida"
    },
    {
      "name": "OFEMIS",
      "label": "Ofertas Missionárias Enviadas",
      "order": "36",
      "tipo": "Saida"
    },
    {
      "name": "Outr",
      "label": "Outras saidas",
      "order": "37",
      "tipo": "Saida"
    },
    {
      "name": "DIZ",
      "label": "Dízimos",
      "order": "38",
      "tipo": "Entrada"
    },
    {
      "name": "samaria",
      "label": "Samaria",
      "order": "39",
      "tipo": "Entrada"
    },
    {
      "name": "jni",
      "label": "JNI",
      "order": "40",
      "tipo": "Entrada"
    }
  ],
  "fontes": [
    {
      "name": "MEMBROS",
      "label": "Membros",
      "order": "",
      "tipo": ""
    },
    {
      "name": "VISIT",
      "label": "Visitantes",
      "order": "",
      "tipo": ""
    },
    {
      "name": "PARC",
      "label": "Parceiros",
      "order": "",
      "tipo": ""
    },
    {
      "name": "CAMP",
      "label": "Campanhas Especiais",
      "order": "",
      "tipo": ""
    },
    {
      "name": "DOADORES",
      "label": "Doadores Externos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "OUTROS",
      "label": "Outras",
      "order": "",
      "tipo": ""
    }
  ],
  "departamentos": [
    {
      "name": "ADMIN",
      "label": "Administração",
      "order": "",
      "tipo": ""
    },
    {
      "name": "JNI",
      "label": "Juventude Nazarena (JNI)",
      "order": "",
      "tipo": ""
    },
    {
      "name": "MNI",
      "label": "Missões Nazarenas (MNI)",
      "order": "",
      "tipo": ""
    },
    {
      "name": "DNI",
      "label": "Discipulado Nazareno (DNI)",
      "order": "",
      "tipo": ""
    },
    {
      "name": "ED",
      "label": "Escola Dominical",
      "order": "",
      "tipo": ""
    },
    {
      "name": "CONSTR",
      "label": "Construção",
      "order": "",
      "tipo": ""
    },
    {
      "name": "SOCIAL",
      "label": "Acção Social",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Filadelfia",
      "label": "Filadelfia",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Jerico",
      "label": "Jerico",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Galileia",
      "label": "Galileia",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Jerusalem",
      "label": "Jerusalem",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Ngalava",
      "label": "Ngalava",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Betania",
      "label": "Betania",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Kanana",
      "label": "Kanana",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Incendiarios",
      "label": "Incendiarios",
      "order": "",
      "tipo": ""
    },
    {
      "name": "Ebenezer",
      "label": "Ebenezer",
      "order": "",
      "tipo": ""
    },
    {
      "name": "criancas",
      "label": "Crianças",
      "order": "",
      "tipo": ""
    },
    {
      "name": "pais",
      "label": "Pais",
      "order": "",
      "tipo": ""
    },
    {
      "name": "activistas",
      "label": "Ativistas",
      "order": "",
      "tipo": ""
    },
    {
      "name": "idosos",
      "label": "Idosos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "outros_min",
      "label": "Outros Ministérios",
      "order": "",
      "tipo": ""
    },
    {
      "name": "maes",
      "label": "Mães",
      "order": "",
      "tipo": ""
    },
    {
      "name": "grupo_especial",
      "label": "Grupo Especial",
      "order": "",
      "tipo": ""
    },
    {
      "name": "samaria",
      "label": "Samaria",
      "order": "",
      "tipo": ""
    }
  ],
  "contas": [
    {
      "name": "CAIXA_SEDE",
      "label": "Caixa",
      "order": "",
      "tipo": ""
    },
    {
      "name": "MPESA_SEDE",
      "label": "M-Pesa",
      "order": "",
      "tipo": ""
    },
    {
      "name": "EMOLA_SEDE",
      "label": "E-Mola",
      "order": "",
      "tipo": ""
    },
    {
      "name": "BIM_IGREJA",
      "label": "Conta BIM",
      "order": "",
      "tipo": ""
    }
  ],
  "metodos": [
    {
      "name": "DINHEIRO",
      "label": "Dinheiro",
      "order": "",
      "tipo": ""
    },
    {
      "name": "MPESA",
      "label": "M-Pesa",
      "order": "",
      "tipo": ""
    },
    {
      "name": "EMOLA",
      "label": "E-Mola",
      "order": "",
      "tipo": ""
    },
    {
      "name": "TRANSF",
      "label": "Transferência Bancária",
      "order": "",
      "tipo": ""
    },
    {
      "name": "CHEQUE",
      "label": "Cheque",
      "order": "",
      "tipo": ""
    },
    {
      "name": "POS",
      "label": "POS",
      "order": "",
      "tipo": ""
    },
    {
      "name": "CARTAO",
      "label": "Cartão",
      "order": "",
      "tipo": ""
    }
  ],
  "doc_tipos": [
    {
      "name": "factura",
      "label": "Factura",
      "order": "",
      "tipo": ""
    },
    {
      "name": "recibo",
      "label": "Recibo",
      "order": "",
      "tipo": ""
    },
    {
      "name": "guia",
      "label": "Guia",
      "order": "",
      "tipo": ""
    },
    {
      "name": "nota_credito",
      "label": "Nota de Crédito",
      "order": "",
      "tipo": ""
    },
    {
      "name": "outro",
      "label": "Outro",
      "order": "",
      "tipo": ""
    }
  ],
  "moedas": [
    {
      "name": "MZN",
      "label": "Metical Moçambicano",
      "order": "",
      "tipo": ""
    },
    {
      "name": "ZAR",
      "label": "Rand Sul-Africano",
      "order": "",
      "tipo": ""
    }
  ],
  "modo_id": [
    {
      "name": "csv",
      "label": "Escolher da lista (CSV)",
      "order": "",
      "tipo": ""
    },
    {
      "name": "manual",
      "label": "Escrever manualmente",
      "order": "",
      "tipo": ""
    }
  ],
  "usuarios": [
    {
      "name": "filipe",
      "label": "Filipe — Secretário",
      "order": "",
      "tipo": ""
    },
    {
      "name": "kelvin",
      "label": "Kelvin — IT",
      "order": "",
      "tipo": ""
    },
    {
      "name": "alfa",
      "label": "Alfa — Tesoureira",
      "order": "",
      "tipo": ""
    },
    {
      "name": "alanisse",
      "label": "Alanisse — IT",
      "order": "",
      "tipo": ""
    }
  ],
  "sexo": [
    {
      "name": "M",
      "label": "Masculino",
      "order": "",
      "tipo": ""
    },
    {
      "name": "F",
      "label": "Feminino",
      "order": "",
      "tipo": ""
    }
  ],
  "faixa_etaria": [
    {
      "name": "crianca",
      "label": "Criança",
      "order": "",
      "tipo": ""
    },
    {
      "name": "adolescente",
      "label": "Adolescente",
      "order": "",
      "tipo": ""
    },
    {
      "name": "jovem",
      "label": "Jovem",
      "order": "",
      "tipo": ""
    },
    {
      "name": "adulto",
      "label": "Adulto",
      "order": "",
      "tipo": ""
    },
    {
      "name": "idoso",
      "label": "Idoso",
      "order": "",
      "tipo": ""
    }
  ],
  "como_conheceu": [
    {
      "name": "amigo_familia",
      "label": "Amigo/Família",
      "order": "",
      "tipo": ""
    },
    {
      "name": "redes_sociais",
      "label": "Redes sociais",
      "order": "",
      "tipo": ""
    },
    {
      "name": "passou_aqui",
      "label": "Passei por aqui",
      "order": "",
      "tipo": ""
    },
    {
      "name": "convite",
      "label": "Convite",
      "order": "",
      "tipo": ""
    },
    {
      "name": "outro",
      "label": "Outro",
      "order": "",
      "tipo": ""
    }
  ],
  "tipo_registo_pessoa": [
    {
      "name": "visitante",
      "label": "Visitante",
      "order": "1",
      "tipo": ""
    },
    {
      "name": "membro_efectivo",
      "label": "Membro efectivo",
      "order": "2",
      "tipo": ""
    }
  ],
  "fz2qm26": [
    {
      "name": "sim__continuar",
      "label": "Sim, continuar",
      "order": "",
      "tipo": ""
    },
    {
      "name": "n_o",
      "label": "Não",
      "order": "",
      "tipo": ""
    }
  ],
  "tu47p80": [
    {
      "name": "menor_de_18_anos",
      "label": "Menor de 18 anos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "18___24_anos",
      "label": "18 – 24 anos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "25___34_anos",
      "label": "25 – 34 anos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "35___44_anos",
      "label": "35 – 44 anos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "45___54_anos",
      "label": "45 – 54 anos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "55___64_anos",
      "label": "55 – 64 anos",
      "order": "",
      "tipo": ""
    },
    {
      "name": "65_anos_ou_mais",
      "label": "65 anos ou mais",
      "order": "",
      "tipo": ""
    }
  ]
};

const state = {
  values: {}, members: [], repeats: {}, currentView: 'formView', stats: null
};
const PIN_BY_MODULE = { plano_cultos_escalas:'1234', relatorio_cultos:'2345', registo_financeiro:'5678' };

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function toast(message, type='info'){
  const t = $('#toast'); t.textContent = message; t.className = `toast show ${type}`;
  setTimeout(()=> t.classList.remove('show'), 4200);
}
function setStatus(kind, title, text){
  const dot=$('#statusDot'); dot.className='status-dot '+(kind||'');
  $('#statusTitle').textContent=title; $('#statusText').textContent=text;
}
function cleanHtml(s){ return String(s||'').replace(/<[^>]*>/g,'').replace(/\*\*/g,''); }
function baseType(type){ return String(type||'').split(/\s+/)[0]; }
function listName(type){ return String(type||'').split(/\s+/)[1] || ''; }
function uuid(){ return (crypto.randomUUID ? crypto.randomUUID() : 'id-'+Date.now()+'-'+Math.random().toString(16).slice(2)); }

function getVal(name){ return state.values[name] ?? ''; }
function setVal(name, value){ state.values[name] = value ?? ''; }

function jsExpr(expr){
  if(!expr) return 'true';
  let e = String(expr);
  e = e.replace(/\$\{([^}]+)\}/g, (_, n)=>`getVal("${n}")`);
  e = e.replace(/string-length\(([^)]+)\)/g, 'String($1||"").length');
  e = e.replace(/translate\(([^,]+),\s*'\+ '\s*,\s*''\)/g, 'String($1||"").replace(/[+ ]/g, "")');
  e = e.replace(/regex\(([^,]+),\s*'([^']+)'\)/g, '(new RegExp($2).test(String($1||"")))');
  e = e.replace(/\bnot\s*\(/g, '!(');
  e = e.replace(/\band\b/g, '&&').replace(/\bor\b/g, '||');
  e = e.replace(/(?<![!<>=])=(?![=])/g, '==');
  return e;
}
function evalExpr(expr){
  if(expr === true || expr === 'true') return true;
  if(expr === false || expr === 'false') return false;
  if(expr === '' || expr == null) return true;
  try { return !!Function('getVal', `return (${jsExpr(expr)});`)(getVal); }
  catch(e){ console.warn('Expressão não avaliada:', expr, e); return true; }
}
function isRequired(required){
  if(required === true || required === 'true') return true;
  if(!required || required === 'false') return false;
  return evalExpr(required);
}
function optionLabel(list, value){
  const item=(CHOICES[list]||[]).find(x=>x.name===value);
  return item ? item.label : value;
}
function updateDerived(){
  const menu = getVal('menu_preencher');
  setVal('pin_esperado', PIN_BY_MODULE[menu] || '');
  setVal('acesso_ok', !PIN_BY_MODULE[menu] || getVal('pin_acesso') === PIN_BY_MODULE[menu] ? 1 : 0);
  XLSFORM_FIELDS.forEach(f=>{
    if(baseType(f.type)==='calculate' && f.calculation){
      const c = f.calculation;
      const choiceMatch = c.match(/jr:choice-name\(\$\{([^}]+)\},\s*'([^']+)'\)/);
      if(choiceMatch) setVal(f.name, optionLabel(choiceMatch[2], getVal(choiceMatch[1])));
      const pd = c.match(/pulldata\('membros',\s*'([^']+)'\s*,\s*'name'\s*,\s*\$\{([^}]+)\}\)/);
      if(pd) setVal(f.name, memberField(getVal(pd[2]), pd[1]));
    }
  });
  if(getVal('moeda') === 'MZN' && !getVal('cambio')) setVal('cambio', '1');
}
function memberField(name, field){
  const m = state.members.find(x => String(x.name)===String(name));
  return m ? (m[field] || m[String(field).toLowerCase()] || '') : '';
}
function applyPulldataToVisibleInputs(){
  XLSFORM_FIELDS.forEach(f=>{
    if(!f.calculation) return;
    const pd = f.calculation.match(/pulldata\('membros',\s*'([^']+)'\s*,\s*'name'\s*,\s*\$\{([^}]+)\}\)/);
    if(!pd) return;
    const val = memberField(getVal(pd[2]), pd[1]);
    if(val){ setVal(f.name, val); const el = document.querySelector(`[name="${CSS.escape(f.name)}"]`); if(el) el.value = val; }
  });
}

function buildTree(){
  const root=[]; const stack=[{children:root}];
  XLSFORM_FIELDS.forEach((f, idx)=>{
    const t=baseType(f.type);
    if(t==='begin_group' || t==='begin_repeat'){
      const node={...f, id:f.name||('grp_'+idx), kind:t, children:[]};
      stack[stack.length-1].children.push(node); stack.push(node);
    } else if(t==='end_group' || t==='end_repeat') { if(stack.length>1) stack.pop(); }
    else { stack[stack.length-1].children.push({...f, id:f.name||('item_'+idx), kind:t}); }
  });
  return root;
}
function renderForm(){
  const form=$('#dynamicForm'); form.innerHTML='';
  const tree=buildTree();
  const grid=document.createElement('div'); grid.className='field-grid';
  tree.forEach(n=>grid.appendChild(renderNode(n)));
  form.appendChild(grid);
  const actions=document.createElement('div'); actions.className='actions';
  actions.innerHTML='<span class="pill" id="modulePill">Seleccione o módulo</span><button type="submit" class="primary-btn">Submeter para Google Sheets</button>';
  form.appendChild(actions);
  form.addEventListener('input', onInput);
  form.addEventListener('change', onInput);
  form.addEventListener('submit', submitForm);
  refreshVisibility(); updateProgress();
}
function renderNode(n){
  const t=baseType(n.type);
  if(t==='begin_group'){
    const sec=document.createElement('section'); sec.className='section full'; sec.dataset.relevant=n.relevant||'';
    sec.innerHTML=`<h3>${cleanHtml(n.label||'Secção')}</h3>${n.hint?`<p class="hint">${cleanHtml(n.hint)}</p>`:''}<div class="field-grid"></div>`;
    n.children.forEach(c=>$('.field-grid',sec).appendChild(renderNode(c)));
    return sec;
  }
  if(t==='begin_repeat') return renderRepeater(n);
  if(t==='note'){
    const d=document.createElement('div'); d.className='note'; d.dataset.relevant=n.relevant||'';
    d.innerHTML=`<strong>${cleanHtml(n.label||'Nota')}</strong>${n.hint?`<small>${cleanHtml(n.hint)}</small>`:''}`; return d;
  }
  if(t==='calculate') return document.createComment('calculate '+(n.name||''));
  return renderField(n);
}
function renderRepeater(n){
  const d=document.createElement('div'); d.className='repeater'; d.dataset.relevant=n.relevant||''; d.dataset.repeat=n.name;
  state.repeats[n.name]=state.repeats[n.name]||[];
  d.innerHTML=`<div class="repeat-head"><div><strong>${cleanHtml(n.label||'Linhas')}</strong><br><small>Adicione uma ou mais linhas, quando aplicável.</small></div><button type="button" class="ghost-btn">Adicionar</button></div><div class="repeat-list"></div>`;
  $('button',d).addEventListener('click',()=>addRepeatItem(d,n));
  if(!state.repeats[n.name].length) addRepeatItem(d,n);
  return d;
}
function addRepeatItem(container,n){
  const list=$('.repeat-list',container); const idx=list.children.length;
  state.repeats[n.name][idx]=state.repeats[n.name][idx]||{};
  const item=document.createElement('div'); item.className='repeat-item';
  item.innerHTML=`<div class="repeat-head"><strong>Linha ${idx+1}</strong><button type="button" class="danger-btn">Remover</button></div><div class="field-grid"></div>`;
  $('button',item).addEventListener('click',()=>{ item.remove(); collectRepeatValues(); updateProgress(); });
  n.children.forEach(c=> $('.field-grid',item).appendChild(renderField(c, n.name, idx)) );
  list.appendChild(item); refreshVisibility();
}
function renderField(f, repeatName='', repeatIndex=''){
  const t=baseType(f.type); const name=f.name||''; const full = ['text'].includes(t) && String(f.appearance||'').includes('long-text');
  const wrap=document.createElement('div'); wrap.className='field '+(full?'full':''); wrap.dataset.relevant=f.relevant||''; wrap.dataset.field=name;
  const req=isRequired(f.required); const inputName=repeatName ? `${repeatName}__${repeatIndex}__${name}` : name;
  const label=cleanHtml(f.label||name);
  wrap.innerHTML=`<label for="${inputName}">${label}${req?'<span class="req"> *</span>':''}</label>${f.hint?`<small>${cleanHtml(f.hint)}</small>`:''}`;
  let el;
  if(t==='select_one' || t==='select_one_from_file') el = document.createElement('select');
  else if(t==='select_multiple' || t==='select_multiple_from_file') { el=document.createElement('select'); el.multiple=true; }
  else if(t==='text' && String(f.appearance||'').includes('long-text')) el=document.createElement('textarea');
  else { el=document.createElement('input'); el.type = t==='decimal'||t==='integer' ? 'number' : (t==='date'||t==='time'||t==='file' ? t : 'text'); if(t==='decimal') el.step='0.01'; }
  el.name=inputName; el.id=inputName; el.dataset.originalName=name; if(repeatName) el.dataset.repeatName=repeatName, el.dataset.repeatIndex=repeatIndex;
  if(t==='select_one' || t==='select_multiple') fillChoiceOptions(el, listName(f.type));
  if(t==='select_one_from_file' || t==='select_multiple_from_file') fillMemberOptions(el);
  if(f.default) el.value=f.default;
  if(!repeatName && state.values[name]) el.value=state.values[name];
  wrap.appendChild(el); return wrap;
}
function fillChoiceOptions(el, list){
  if(!el.multiple) el.appendChild(new Option('Seleccione...', ''));
  (CHOICES[list]||[]).forEach(o=>el.appendChild(new Option(o.label, o.name)));
}
function fillMemberOptions(el){
  if(!el.multiple) el.appendChild(new Option('Seleccione da lista de membros...', ''));
  state.members.forEach(m=>el.appendChild(new Option(m.label || m.name, m.name)));
}
function onInput(e){
  const el=e.target; if(!el.name) return;
  if(el.dataset.repeatName){ collectRepeatValues(); return; }
  const val = el.multiple ? Array.from(el.selectedOptions).map(o=>o.value) : el.value;
  setVal(el.dataset.originalName || el.name, Array.isArray(val)?val.join('; '):val);
  updateDerived(); applyPulldataToVisibleInputs(); refreshVisibility(); updateProgress();
}
function collectRepeatValues(){
  Object.keys(state.repeats).forEach(k=>state.repeats[k]=[]);
  $$('[data-repeat-name]').forEach(el=>{
    const r=el.dataset.repeatName, i=Number(el.dataset.repeatIndex), n=el.dataset.originalName;
    state.repeats[r][i]=state.repeats[r][i]||{};
    state.repeats[r][i][n]=el.multiple ? Array.from(el.selectedOptions).map(o=>o.value).join('; ') : el.value;
  });
}
function refreshVisibility(){
  updateDerived();
  $$('[data-relevant]').forEach(el=>{
    const ok=evalExpr(el.dataset.relevant); el.classList.toggle('hidden', !ok);
  });
  const moduleLabel = optionLabel('menu_preencher', getVal('menu_preencher')) || 'Seleccione o módulo';
  const pill=$('#modulePill'); if(pill) pill.textContent = getVal('acesso_ok') === 1 || getVal('menu_preencher')==='visitantes' ? moduleLabel : 'PIN necessário';
}
function updateProgress(){
  const visibleFields=$$('.field:not(.hidden) [name]').filter(el=>!el.closest('.hidden'));
  const filled=visibleFields.filter(el=> el.multiple ? el.selectedOptions.length : String(el.value||'').trim()).length;
  const pct=visibleFields.length ? Math.round((filled/visibleFields.length)*100) : 0;
  $('#progressBar').style.width=pct+'%';
}
function validate(){
  let ok=true; $$('.error').forEach(x=>x.classList.remove('error')); $$('.error-text').forEach(x=>x.remove());
  $$('input,select,textarea').forEach(el=>{
    if(el.closest('.hidden')) return;
    const field=XLSFORM_FIELDS.find(f=>f.name === (el.dataset.originalName||el.name)); if(!field) return;
    const value=el.multiple ? Array.from(el.selectedOptions).map(o=>o.value).join('; ') : el.value;
    if(isRequired(field.required) && !String(value||'').trim()) return markError(el,'Campo obrigatório.'), ok=false;
    if(field.constraint && String(value||'').trim()){
      const old=state.values[field.name]; state.values[field.name]=value;
      const passed=evalExpr(field.constraint.replace(/^\.\s*/,'getVal("'+field.name+'")'));
      state.values[field.name]=old;
      if(!passed) return markError(el, field.constraint_message || 'Valor inválido.'), ok=false;
    }
  });
  if(PIN_BY_MODULE[getVal('menu_preencher')] && getVal('acesso_ok') !== 1){ markError($('[name="pin_acesso"]'), 'PIN inválido.'); ok=false; }
  return ok;
}
function markError(el,msg){ if(!el) return; el.classList.add('error'); const e=document.createElement('div'); e.className='error-text'; e.textContent=msg; el.parentElement.appendChild(e); }
function collectPayload(){
  collectRepeatValues(); updateDerived();
  $$('input,select,textarea').forEach(el=>{ if(!el.dataset.repeatName) setVal(el.dataset.originalName||el.name, el.multiple ? Array.from(el.selectedOptions).map(o=>o.value).join('; ') : el.value); });
  const module=getVal('menu_preencher') || 'sem_modulo';
  return { action:'submit', module, submittedAt:new Date().toISOString(), uuid: getVal('submission_uuid') || uuid(), data:{...state.values}, repeats:state.repeats, userAgent:navigator.userAgent };
}
async function submitForm(e){
  e.preventDefault(); if(!validate()) return toast('Corrija os campos assinalados antes de submeter.', 'error');
  const url=window.APP_CONFIG.APPS_SCRIPT_URL;
  if(!url) return toast('Configure primeiro a URL do Apps Script em config.js.', 'error');
  const btn=$('button[type="submit"]'); btn.disabled=true; btn.textContent='A submeter...';
  try{
    const res=await fetch(url, {method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify(collectPayload())});
    const out=await res.json(); if(!out.ok) throw new Error(out.message || 'Erro desconhecido');
    toast('Registo submetido com sucesso.'); resetForm(); loadStats();
  }catch(err){ console.error(err); toast('Falha ao submeter: '+err.message, 'error'); }
  finally{ btn.disabled=false; btn.textContent='Submeter para Google Sheets'; }
}
function resetForm(){ state.values={submission_uuid:uuid()}; state.repeats={}; renderForm(); }
async function bootstrap(){
  setVal('submission_uuid', uuid()); renderForm();
  const url=window.APP_CONFIG.APPS_SCRIPT_URL;
  if(!url){ setStatus('bad','Backend não configurado','Cole a URL do Apps Script em config.js'); return; }
  try{
    const res=await fetch(url+'?action=bootstrap'); const out=await res.json();
    state.members=out.members || []; setStatus('ok','Ligado','Backend e Google Sheets disponíveis'); renderForm(); loadStats();
  }catch(e){ setStatus('bad','Sem ligação','Verifique a URL do Apps Script'); console.warn(e); }
}
async function loadStats(){
  const grid=$('#statsGrid'); grid.innerHTML='<div class="kpi"><span>A carregar...</span></div>';
  const url=window.APP_CONFIG.APPS_SCRIPT_URL; if(!url){ grid.innerHTML='<div class="kpi"><span>Backend não configurado</span></div>'; return; }
  try{
    const res=await fetch(url+'?action=stats'); const out=await res.json();
    const stats=out.stats || {}; const modules=['plano_cultos_escalas','relatorio_cultos','visitantes','registo_financeiro'];
    grid.innerHTML=modules.map(m=>`<div class="kpi"><b>${stats[m]||0}</b><span>${optionLabel('menu_preencher',m)}</span></div>`).join('');
    renderRecent(out.recent||[]);
  }catch(e){ grid.innerHTML='<div class="kpi"><span>Não foi possível carregar o painel.</span></div>'; }
}
function renderRecent(rows){
  const thead=$('#recentTable thead'), tbody=$('#recentTable tbody');
  thead.innerHTML='<tr><th>Data</th><th>Módulo</th><th>UUID</th></tr>';
  tbody.innerHTML=rows.length ? rows.map(r=>`<tr><td>${r.submittedAt||''}</td><td>${optionLabel('menu_preencher',r.module)||r.module}</td><td>${r.uuid||''}</td></tr>`).join('') : '<tr><td colspan="3">Sem registos recentes.</td></tr>';
}
$$('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{ $$('.nav-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $$('.view').forEach(v=>v.classList.remove('active')); $('#'+btn.dataset.view).classList.add('active'); if(btn.dataset.view==='dashboardView') loadStats(); }));
$('#resetBtn').addEventListener('click', resetForm);
$('#refreshStatsBtn').addEventListener('click', loadStats);
bootstrap();
