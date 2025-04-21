/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { SystemUsersApi } from './SystemUsersApi';
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
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import {
  BudgetControlRules,
  BudgetControlRulesType
} from './BudgetControlRules';
import {
  UserGroupUserLists,
  UserGroupUserListsType
} from './UserGroupUserLists';
import {
  BudgetControlGroups,
  BudgetControlGroupsType
} from './BudgetControlGroups';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';
import {
  LedgerAccountAliases,
  LedgerAccountAliasesType
} from './LedgerAccountAliases';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';
import { PersonUsers, PersonUsersType } from './PersonUsers';

/**
 * This class represents the entity "SystemUsers" of service "d365_metadata".
 */
export class SystemUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SystemUsersType<T>
{
  /**
   * Technical entity name for SystemUsers.
   */
  static override _entityName = 'SystemUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemUsers entity.
   */
  static _keys = ['UserID'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow Line Item Notification Format.
   * @nullable
   */
  declare workflowLineItemNotificationFormat?: WorkflowLineItemNotificationFormat | null;
  /**
   * Document Handling Active.
   * @nullable
   */
  declare documentHandlingActive?: NoYes | null;
  /**
   * User Info Default Partition.
   */
  declare userInfoDefaultPartition: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Global List Page Link Mode.
   */
  declare globalListPageLinkMode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Global Excel Export Mode.
   */
  declare globalExcelExportMode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Show Attachment Status.
   * @nullable
   */
  declare showAttachmentStatus?: NoYes | null;
  /**
   * Event Pop Up Link Destination.
   * @nullable
   */
  declare eventPopUpLinkDestination?: EventPopUpLinkDestination | null;
  /**
   * Network Domain.
   * @nullable
   */
  declare networkDomain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sqm Guid.
   */
  declare sqmGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Send Notifications In Email.
   * @nullable
   */
  declare sendNotificationsInEmail?: NoYes | null;
  /**
   * Alias.
   * @nullable
   */
  declare alias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Provider Id.
   * @nullable
   */
  declare emailProviderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Density.
   * @nullable
   */
  declare density?: SysUserInfoDensity | null;
  /**
   * Default Country Region.
   * @nullable
   */
  declare defaultCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Name.
   * @nullable
   */
  declare personName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Send Alert As Email Message.
   * @nullable
   */
  declare sendAlertAsEmailMessage?: EventEmailSendDefineMode | null;
  /**
   * Sqm Enabled.
   * @nullable
   */
  declare sqmEnabled?: SysSqmEnabledClient | null;
  /**
   * Global Excel Export File Path.
   * @nullable
   */
  declare globalExcelExportFilePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Pop Up Display When.
   * @nullable
   */
  declare eventPopUpDisplayWhen?: EventPopupShowDefineMode | null;
  /**
   * Event Workflow Tasks In Action Center.
   * @nullable
   */
  declare eventWorkflowTasksInActionCenter?: NoYes | null;
  /**
   * Event Poll Frequency.
   */
  declare eventPollFrequency: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Event Workflow Show Popup.
   * @nullable
   */
  declare eventWorkflowShowPopup?: NoYes | null;
  /**
   * Start Page.
   * @nullable
   */
  declare startPage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Time Zone.
   * @nullable
   */
  declare preferredTimeZone?: Timezone | null;
  /**
   * Home Page Refresh Duration.
   */
  declare homePageRefreshDuration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User Info Language.
   * @nullable
   */
  declare userInfoLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Log Off.
   */
  declare autoLogOff: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Theme.
   * @nullable
   */
  declare theme?: SysUserInfoTheme | null;
  /**
   * Mark Empty Links.
   * @nullable
   */
  declare markEmptyLinks?: NoYes | null;
  /**
   * Enabled.
   */
  declare enabled: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Show Notifications In The Microsoft Dynamics Ax 7 Client.
   * @nullable
   */
  declare showNotificationsInTheMicrosoftDynamicsAx7Client?: NoYes | null;
  /**
   * User Name.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Helplanguage.
   * @nullable
   */
  declare helplanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Pop Ups.
   * @nullable
   */
  declare eventPopUps?: NoYes | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: UserAccountType | null;
  /**
   * Preferred Calendar.
   * @nullable
   */
  declare preferredCalendar?: PreferredCalendar | null;
  /**
   * Preferred Locale.
   * @nullable
   */
  declare preferredLocale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External User.
   */
  declare externalUser: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Automatic Url Update.
   * @nullable
   */
  declare automaticUrlUpdate?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare defaultBudgetManager: BudgetControlConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlRules} entity.
   */
  declare budgetControlRuleBudgetManager: BudgetControlRules<T>[];
  /**
   * One-to-many navigation property to the {@link UserGroupUserLists} entity.
   */
  declare userGroupUserList: UserGroupUserLists<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlGroups} entity.
   */
  declare budgetControlGroupBudgetManager: BudgetControlGroups<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAccountAliases} entity.
   */
  declare ledgerAccountAlias: LedgerAccountAliases<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersSystemUser: BudgetTrackingWorkspaceParameters<T>[];
  /**
   * One-to-one navigation property to the {@link PersonUsers} entity.
   */
  declare personUserSystemUserEntity?: PersonUsers<T> | null;

  constructor(_entityApi: SystemUsersApi<T>) {
    super(_entityApi);
  }
}

export interface SystemUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  workflowLineItemNotificationFormat?: WorkflowLineItemNotificationFormat | null;
  documentHandlingActive?: NoYes | null;
  userInfoDefaultPartition: DeserializedType<T, 'Edm.Boolean'>;
  globalListPageLinkMode: DeserializedType<T, 'Edm.Int32'>;
  globalExcelExportMode: DeserializedType<T, 'Edm.Int32'>;
  showAttachmentStatus?: NoYes | null;
  eventPopUpLinkDestination?: EventPopUpLinkDestination | null;
  networkDomain?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  sqmGuid: DeserializedType<T, 'Edm.Guid'>;
  sendNotificationsInEmail?: NoYes | null;
  alias?: DeserializedType<T, 'Edm.String'> | null;
  emailProviderId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  density?: SysUserInfoDensity | null;
  defaultCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  personName?: DeserializedType<T, 'Edm.String'> | null;
  sendAlertAsEmailMessage?: EventEmailSendDefineMode | null;
  sqmEnabled?: SysSqmEnabledClient | null;
  globalExcelExportFilePath?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  eventPopUpDisplayWhen?: EventPopupShowDefineMode | null;
  eventWorkflowTasksInActionCenter?: NoYes | null;
  eventPollFrequency: DeserializedType<T, 'Edm.Int32'>;
  eventWorkflowShowPopup?: NoYes | null;
  startPage?: DeserializedType<T, 'Edm.String'> | null;
  preferredTimeZone?: Timezone | null;
  homePageRefreshDuration: DeserializedType<T, 'Edm.Int32'>;
  userInfoLanguage?: DeserializedType<T, 'Edm.String'> | null;
  autoLogOff: DeserializedType<T, 'Edm.Int32'>;
  theme?: SysUserInfoTheme | null;
  markEmptyLinks?: NoYes | null;
  enabled: DeserializedType<T, 'Edm.Boolean'>;
  showNotificationsInTheMicrosoftDynamicsAx7Client?: NoYes | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  helplanguage?: DeserializedType<T, 'Edm.String'> | null;
  eventPopUps?: NoYes | null;
  accountType?: UserAccountType | null;
  preferredCalendar?: PreferredCalendar | null;
  preferredLocale?: DeserializedType<T, 'Edm.String'> | null;
  externalUser: DeserializedType<T, 'Edm.Boolean'>;
  automaticUrlUpdate?: NoYes | null;
  defaultBudgetManager: BudgetControlConfigurationsType<T>[];
  budgetControlRuleBudgetManager: BudgetControlRulesType<T>[];
  userGroupUserList: UserGroupUserListsType<T>[];
  budgetControlGroupBudgetManager: BudgetControlGroupsType<T>[];
  itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2Type<T>[];
  ledgerAccountAlias: LedgerAccountAliasesType<T>[];
  budgetTrackingWorkspaceParametersSystemUser: BudgetTrackingWorkspaceParametersType<T>[];
  personUserSystemUserEntity?: PersonUsersType<T> | null;
}
