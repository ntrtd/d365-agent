/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SystemUsers } from './SystemUsers';
import { SystemUsersRequestBuilder } from './SystemUsersRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetControlRulesApi } from './BudgetControlRulesApi';
import { UserGroupUserListsApi } from './UserGroupUserListsApi';
import { BudgetControlGroupsApi } from './BudgetControlGroupsApi';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { LedgerAccountAliasesApi } from './LedgerAccountAliasesApi';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
import { PersonUsersApi } from './PersonUsersApi';
import { WorkflowLineItemNotificationFormat } from './WorkflowLineItemNotificationFormat';
import { NoYes } from './NoYes';
import { EventPopUpLinkDestination } from './EventPopUpLinkDestination';
import { SysUserInfoDensity } from './SysUserInfoDensity';
import { EventEmailSendDefineMode } from './EventEmailSendDefineMode';
import { SysSqmEnabledClient } from './SysSqmEnabledClient';
import { EventPopupShowDefineMode } from './EventPopupShowDefineMode';
import { Timezone } from './Timezone';
import { SysUserInfoTheme } from './SysUserInfoTheme';
import { UserAccountType } from './UserAccountType';
import { PreferredCalendar } from './PreferredCalendar';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SystemUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SystemUsers<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): SystemUsersApi<DeSerializersT> {
    return new SystemUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link defaultBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_BUDGET_MANAGER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_BUDGET_MANAGER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userGroupUserList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP_USER_LIST: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      UserGroupUserListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_BUDGET_MANAGER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersSystemUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_SYSTEM_USER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personUserSystemUserEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_USER_SYSTEM_USER_ENTITY: OneToOneLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      PersonUsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlConfigurationsApi<DeSerializersT>,
      BudgetControlRulesApi<DeSerializersT>,
      UserGroupUserListsApi<DeSerializersT>,
      BudgetControlGroupsApi<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      LedgerAccountAliasesApi<DeSerializersT>,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>,
      PersonUsersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEFAULT_BUDGET_MANAGER: new OneToManyLink(
        'DefaultBudgetManager',
        this,
        linkedApis[0]
      ),
      BUDGET_CONTROL_RULE_BUDGET_MANAGER: new OneToManyLink(
        'BudgetControlRuleBudgetManager',
        this,
        linkedApis[1]
      ),
      USER_GROUP_USER_LIST: new OneToManyLink(
        'UserGroupUserList',
        this,
        linkedApis[2]
      ),
      BUDGET_CONTROL_GROUP_BUDGET_MANAGER: new OneToManyLink(
        'BudgetControlGroupBudgetManager',
        this,
        linkedApis[3]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[4]
      ),
      LEDGER_ACCOUNT_ALIAS: new OneToManyLink(
        'LedgerAccountAlias',
        this,
        linkedApis[5]
      ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_SYSTEM_USER: new OneToManyLink(
        'BudgetTrackingWorkspaceParametersSystemUser',
        this,
        linkedApis[6]
      ),
      PERSON_USER_SYSTEM_USER_ENTITY: new OneToOneLink(
        'PersonUserSystemUserEntity',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = SystemUsers;

  requestBuilder(): SystemUsersRequestBuilder<DeSerializersT> {
    return new SystemUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SystemUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SystemUsers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SystemUsers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SystemUsers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SystemUsers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW_LINE_ITEM_NOTIFICATION_FORMAT: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      WorkflowLineItemNotificationFormat,
      true,
      true
    >;
    DOCUMENT_HANDLING_ACTIVE: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USER_INFO_DEFAULT_PARTITION: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    GLOBAL_LIST_PAGE_LINK_MODE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GLOBAL_EXCEL_EXPORT_MODE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHOW_ATTACHMENT_STATUS: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EVENT_POP_UP_LINK_DESTINATION: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      EventPopUpLinkDestination,
      true,
      true
    >;
    NETWORK_DOMAIN: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SQM_GUID: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SEND_NOTIFICATIONS_IN_EMAIL: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALIAS: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_PROVIDER_ID: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DENSITY: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      SysUserInfoDensity,
      true,
      true
    >;
    DEFAULT_COUNTRY_REGION: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_NAME: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEND_ALERT_AS_EMAIL_MESSAGE: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      EventEmailSendDefineMode,
      true,
      true
    >;
    SQM_ENABLED: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      SysSqmEnabledClient,
      true,
      true
    >;
    GLOBAL_EXCEL_EXPORT_FILE_PATH: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_POP_UP_DISPLAY_WHEN: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      EventPopupShowDefineMode,
      true,
      true
    >;
    EVENT_WORKFLOW_TASKS_IN_ACTION_CENTER: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EVENT_POLL_FREQUENCY: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EVENT_WORKFLOW_SHOW_POPUP: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    START_PAGE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERRED_TIME_ZONE: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    HOME_PAGE_REFRESH_DURATION: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_INFO_LANGUAGE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_LOG_OFF: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THEME: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      SysUserInfoTheme,
      true,
      true
    >;
    MARK_EMPTY_LINKS: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLED: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SHOW_NOTIFICATIONS_IN_THE_MICROSOFT_DYNAMICS_AX_7_CLIENT: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HELPLANGUAGE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_POP_UPS: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      UserAccountType,
      true,
      true
    >;
    PREFERRED_CALENDAR: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      PreferredCalendar,
      true,
      true
    >;
    PREFERRED_LOCALE: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_USER: OrderableEdmTypeField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    AUTOMATIC_URL_UPDATE: EnumField<
      SystemUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_BUDGET_MANAGER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_BUDGET_MANAGER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userGroupUserList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP_USER_LIST: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      UserGroupUserListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_BUDGET_MANAGER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersSystemUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_SYSTEM_USER: OneToManyLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personUserSystemUserEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_USER_SYSTEM_USER_ENTITY: OneToOneLink<
      SystemUsers<DeSerializersT>,
      DeSerializersT,
      PersonUsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SystemUsers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', false),
        /**
         * Static representation of the {@link workflowLineItemNotificationFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_LINE_ITEM_NOTIFICATION_FORMAT: fieldBuilder.buildEnumField(
          'WorkflowLineItemNotificationFormat',
          WorkflowLineItemNotificationFormat,
          true
        ),
        /**
         * Static representation of the {@link documentHandlingActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_HANDLING_ACTIVE: fieldBuilder.buildEnumField(
          'DocumentHandlingActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link userInfoDefaultPartition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_INFO_DEFAULT_PARTITION: fieldBuilder.buildEdmTypeField(
          'UserInfo_defaultPartition',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link globalListPageLinkMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_LIST_PAGE_LINK_MODE: fieldBuilder.buildEdmTypeField(
          'GlobalListPageLinkMode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link globalExcelExportMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_EXCEL_EXPORT_MODE: fieldBuilder.buildEdmTypeField(
          'GlobalExcelExportMode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link showAttachmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_ATTACHMENT_STATUS: fieldBuilder.buildEnumField(
          'ShowAttachmentStatus',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eventPopUpLinkDestination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_POP_UP_LINK_DESTINATION: fieldBuilder.buildEnumField(
          'EventPopUpLinkDestination',
          EventPopUpLinkDestination,
          true
        ),
        /**
         * Static representation of the {@link networkDomain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NETWORK_DOMAIN: fieldBuilder.buildEdmTypeField(
          'NetworkDomain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link sqmGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQM_GUID: fieldBuilder.buildEdmTypeField('SqmGUID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link sendNotificationsInEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_NOTIFICATIONS_IN_EMAIL: fieldBuilder.buildEnumField(
          'SendNotificationsInEmail',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIAS: fieldBuilder.buildEdmTypeField('Alias', 'Edm.String', true),
        /**
         * Static representation of the {@link emailProviderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_PROVIDER_ID: fieldBuilder.buildEdmTypeField(
          'EmailProviderID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link density} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENSITY: fieldBuilder.buildEnumField(
          'Density',
          SysUserInfoDensity,
          true
        ),
        /**
         * Static representation of the {@link defaultCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'DefaultCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'PersonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sendAlertAsEmailMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEND_ALERT_AS_EMAIL_MESSAGE: fieldBuilder.buildEnumField(
          'SendAlertAsEmailMessage',
          EventEmailSendDefineMode,
          true
        ),
        /**
         * Static representation of the {@link sqmEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQM_ENABLED: fieldBuilder.buildEnumField(
          'SqmEnabled',
          SysSqmEnabledClient,
          true
        ),
        /**
         * Static representation of the {@link globalExcelExportFilePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_EXCEL_EXPORT_FILE_PATH: fieldBuilder.buildEdmTypeField(
          'GlobalExcelExportFilePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventPopUpDisplayWhen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_POP_UP_DISPLAY_WHEN: fieldBuilder.buildEnumField(
          'EventPopUpDisplayWhen',
          EventPopupShowDefineMode,
          true
        ),
        /**
         * Static representation of the {@link eventWorkflowTasksInActionCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_WORKFLOW_TASKS_IN_ACTION_CENTER: fieldBuilder.buildEnumField(
          'EventWorkflowTasksInActionCenter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eventPollFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_POLL_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'EventPollFrequency',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link eventWorkflowShowPopup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_WORKFLOW_SHOW_POPUP: fieldBuilder.buildEnumField(
          'EventWorkflowShowPopup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link startPage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_PAGE: fieldBuilder.buildEdmTypeField(
          'StartPage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferredTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_TIME_ZONE: fieldBuilder.buildEnumField(
          'PreferredTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link homePageRefreshDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_PAGE_REFRESH_DURATION: fieldBuilder.buildEdmTypeField(
          'HomePageRefreshDuration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link userInfoLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_INFO_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'UserInfo_language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoLogOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_LOG_OFF: fieldBuilder.buildEdmTypeField(
          'AutoLogOff',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link theme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THEME: fieldBuilder.buildEnumField('Theme', SysUserInfoTheme, true),
        /**
         * Static representation of the {@link markEmptyLinks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_EMPTY_LINKS: fieldBuilder.buildEnumField(
          'MarkEmptyLinks',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED: fieldBuilder.buildEdmTypeField(
          'Enabled',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link showNotificationsInTheMicrosoftDynamicsAx7Client} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_NOTIFICATIONS_IN_THE_MICROSOFT_DYNAMICS_AX_7_CLIENT:
          fieldBuilder.buildEnumField(
            'ShowNotificationsInTheMicrosoftDynamicsAX7Client',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link helplanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HELPLANGUAGE: fieldBuilder.buildEdmTypeField(
          'Helplanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventPopUps} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_POP_UPS: fieldBuilder.buildEnumField('EventPopUps', NoYes, true),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          UserAccountType,
          true
        ),
        /**
         * Static representation of the {@link preferredCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_CALENDAR: fieldBuilder.buildEnumField(
          'PreferredCalendar',
          PreferredCalendar,
          true
        ),
        /**
         * Static representation of the {@link preferredLocale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_LOCALE: fieldBuilder.buildEdmTypeField(
          'PreferredLocale',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_USER: fieldBuilder.buildEdmTypeField(
          'ExternalUser',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link automaticUrlUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_URL_UPDATE: fieldBuilder.buildEnumField(
          'AutomaticUrlUpdate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SystemUsers)
      };
    }

    return this._schema;
  }
}
