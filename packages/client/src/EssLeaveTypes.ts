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
import type { EssLeaveTypesApi } from './EssLeaveTypesApi';
import { LeaveTypeCategory } from './LeaveTypeCategory';
import { NoYes } from './NoYes';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
import {
  EssLeaveTypeReasonCodes,
  EssLeaveTypeReasonCodesType
} from './EssLeaveTypeReasonCodes';
import {
  EssLeaveTimeOffDates,
  EssLeaveTimeOffDatesType
} from './EssLeaveTimeOffDates';
import { EssLeaveBalances, EssLeaveBalancesType } from './EssLeaveBalances';
import {
  EssLeaveRequestDetails,
  EssLeaveRequestDetailsType
} from './EssLeaveRequestDetails';
import {
  MssLeaveTimeOffDates,
  MssLeaveTimeOffDatesType
} from './MssLeaveTimeOffDates';
import {
  EssLeaveRequestAssignedDetails,
  EssLeaveRequestAssignedDetailsType
} from './EssLeaveRequestAssignedDetails';

/**
 * This class represents the entity "EssLeaveTypes" of service "d365_metadata".
 */
export class EssLeaveTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EssLeaveTypesType<T>
{
  /**
   * Technical entity name for EssLeaveTypes.
   */
  static override _entityName = 'EssLeaveTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveTypes entity.
   */
  static _keys = ['dataAreaId', 'LeaveTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: LeaveTypeCategory | null;
  /**
   * Include Closed Days.
   * @nullable
   */
  declare includeClosedDays?: NoYes | null;
  /**
   * Attachment Required On Cancel.
   * @nullable
   */
  declare attachmentRequiredOnCancel?: NoYes | null;
  /**
   * Include Holidays.
   * @nullable
   */
  declare includeHolidays?: NoYes | null;
  /**
   * Leave Amount Unit.
   * @nullable
   */
  declare leaveAmountUnit?: LeaveAmountUnit | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Type.
   * @nullable
   */
  declare requestType?: LeaveTypeRequestType | null;
  /**
   * Closed Days Working Hours.
   */
  declare closedDaysWorkingHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Include Weekend And Holidays.
   * @nullable
   */
  declare includeWeekendAndHolidays?: NoYes | null;
  /**
   * Is Attachment Required.
   * @nullable
   */
  declare isAttachmentRequired?: NoYes | null;
  /**
   * Is Open Ended.
   * @nullable
   */
  declare isOpenEnded?: NoYes | null;
  /**
   * Attachment Required On Update.
   * @nullable
   */
  declare attachmentRequiredOnUpdate?: NoYes | null;
  /**
   * Enable Half Day Definition.
   * @nullable
   */
  declare enableHalfDayDefinition?: NoYes | null;
  /**
   * Is Reason Code Required.
   * @nullable
   */
  declare isReasonCodeRequired?: NoYes | null;
  /**
   * Attachment Required On Create.
   * @nullable
   */
  declare attachmentRequiredOnCreate?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link EssLeaveTypeReasonCodes} entity.
   */
  declare reasonCodes: EssLeaveTypeReasonCodes<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveTimeOffDates} entity.
   */
  declare timeOffDates: EssLeaveTimeOffDates<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveBalances} entity.
   */
  declare balances: EssLeaveBalances<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveRequestDetails} entity.
   */
  declare leaveRequestDetails: EssLeaveRequestDetails<T>[];
  /**
   * One-to-many navigation property to the {@link MssLeaveTimeOffDates} entity.
   */
  declare reportsTimeOffDates: MssLeaveTimeOffDates<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveRequestAssignedDetails} entity.
   */
  declare leaveRequestAssignedDetails: EssLeaveRequestAssignedDetails<T>[];

  constructor(_entityApi: EssLeaveTypesApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  category?: LeaveTypeCategory | null;
  includeClosedDays?: NoYes | null;
  attachmentRequiredOnCancel?: NoYes | null;
  includeHolidays?: NoYes | null;
  leaveAmountUnit?: LeaveAmountUnit | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  requestType?: LeaveTypeRequestType | null;
  closedDaysWorkingHours: DeserializedType<T, 'Edm.Decimal'>;
  includeWeekendAndHolidays?: NoYes | null;
  isAttachmentRequired?: NoYes | null;
  isOpenEnded?: NoYes | null;
  attachmentRequiredOnUpdate?: NoYes | null;
  enableHalfDayDefinition?: NoYes | null;
  isReasonCodeRequired?: NoYes | null;
  attachmentRequiredOnCreate?: NoYes | null;
  reasonCodes: EssLeaveTypeReasonCodesType<T>[];
  timeOffDates: EssLeaveTimeOffDatesType<T>[];
  balances: EssLeaveBalancesType<T>[];
  leaveRequestDetails: EssLeaveRequestDetailsType<T>[];
  reportsTimeOffDates: MssLeaveTimeOffDatesType<T>[];
  leaveRequestAssignedDetails: EssLeaveRequestAssignedDetailsType<T>[];
}
