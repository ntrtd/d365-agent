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
import type { AdvanceReportsApi } from './AdvanceReportsApi';
import { NoYes } from './NoYes';
import { EmplAdvStatusRu } from './EmplAdvStatusRu';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "AdvanceReports" of service "d365_metadata".
 */
export class AdvanceReports<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdvanceReportsType<T>
{
  /**
   * Technical entity name for AdvanceReports.
   */
  static override _entityName = 'AdvanceReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvanceReports entity.
   */
  static _keys = ['dataAreaId', 'AdvanceReportId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Advance Report Id.
   */
  declare advanceReportId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Fully Factured.
   * @nullable
   */
  declare isFullyFactured?: NoYes | null;
  /**
   * Advance Purpose.
   * @nullable
   */
  declare advancePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checking Date.
   */
  declare checkingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Firming Date.
   */
  declare firmingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Advance Status.
   * @nullable
   */
  declare advanceStatus?: EmplAdvStatusRu | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Advance Holder.
   * @nullable
   */
  declare advanceHolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Official Session.
   * @nullable
   */
  declare officialSession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: AdvanceReportsApi<T>) {
    super(_entityApi);
  }
}

export interface AdvanceReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  advanceReportId: DeserializedType<T, 'Edm.String'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isFullyFactured?: NoYes | null;
  advancePurpose?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  checkingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  firmingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  advanceStatus?: EmplAdvStatusRu | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  advanceHolder?: DeserializedType<T, 'Edm.String'> | null;
  officialSession?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
