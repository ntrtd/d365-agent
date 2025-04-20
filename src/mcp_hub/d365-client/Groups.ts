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
import type { GroupsApi } from './GroupsApi';
import { RDeferralsInitRetirementDate } from './RDeferralsInitRetirementDate';
import { RDeferralsInitWriteStartDate } from './RDeferralsInitWriteStartDate';
import { RDeferralsVatRefundingMethod } from './RDeferralsVatRefundingMethod';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "Groups" of service "d365_metadata".
 */
export class Groups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GroupsType<T>
{
  /**
   * Technical entity name for Groups.
   */
  static override _entityName = 'Groups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Groups entity.
   */
  static _keys = ['dataAreaId', 'DeferralsGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferrals Group.
   */
  declare deferralsGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Writing Off Method.
   * @nullable
   */
  declare writingOffMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Writing Off Time.
   */
  declare writingOffTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Disposal Date.
   * @nullable
   */
  declare disposalDate?: RDeferralsInitRetirementDate | null;
  /**
   * Beginning Date Of Writing Off.
   * @nullable
   */
  declare beginningDateOfWritingOff?: RDeferralsInitWriteStartDate | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Offset Method For Deferrals.
   * @nullable
   */
  declare vatOffsetMethodForDeferrals?: RDeferralsVatRefundingMethod | null;
  /**
   * Model Number.
   * @nullable
   */
  declare modelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: GroupsApi<T>) {
    super(_entityApi);
  }
}

export interface GroupsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deferralsGroup: DeserializedType<T, 'Edm.String'>;
  writingOffMethod?: DeserializedType<T, 'Edm.String'> | null;
  writingOffTime: DeserializedType<T, 'Edm.Int32'>;
  disposalDate?: RDeferralsInitRetirementDate | null;
  beginningDateOfWritingOff?: RDeferralsInitWriteStartDate | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vatOffsetMethodForDeferrals?: RDeferralsVatRefundingMethod | null;
  modelNumber?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
