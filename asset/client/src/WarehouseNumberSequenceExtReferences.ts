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
import type { WarehouseNumberSequenceExtReferencesApi } from './WarehouseNumberSequenceExtReferencesApi';
import { OmOperatingUnitType } from './OmOperatingUnitType';

/**
 * This class represents the entity "WarehouseNumberSequenceExtReferences" of service "d365_metadata".
 */
export class WarehouseNumberSequenceExtReferences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseNumberSequenceExtReferencesType<T>
{
  /**
   * Technical entity name for WarehouseNumberSequenceExtReferences.
   */
  static override _entityName = 'WarehouseNumberSequenceExtReferences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseNumberSequenceExtReferences entity.
   */
  static _keys = [
    'NumberSequenceScope_DataArea',
    'LegalEntity_DataArea',
    'OperatingUnit_PartyNumber',
    'FiscalCalendar_CalendarId',
    'FiscalCalendarYear_Name',
    'FiscalCalendarPeriod_Name',
    'NumberSequenceScope_OperatingUnitType',
    'NumberSequenceScope_SHA256Hash',
    'NumberSequenceDatatype_DatatypeId'
  ];
  /**
   * Number Sequence Scope Data Area.
   */
  declare numberSequenceScopeDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Data Area.
   */
  declare legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Party Number.
   */
  declare operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar Calendar Id.
   */
  declare fiscalCalendarCalendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar Year Name.
   */
  declare fiscalCalendarYearName: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar Period Name.
   */
  declare fiscalCalendarPeriodName: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence Scope Operating Unit Type.
   * @nullable
   */
  declare numberSequenceScopeOperatingUnitType?: OmOperatingUnitType | null;
  /**
   * Number Sequence Scope Sha 256 Hash.
   */
  declare numberSequenceScopeSha256Hash: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence Datatype Datatype Id.
   */
  declare numberSequenceDatatypeDatatypeId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Number Sequence Ext Id.
   * @nullable
   */
  declare numberSequenceExtId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarehouseNumberSequenceExtReferencesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseNumberSequenceExtReferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numberSequenceScopeDataArea: DeserializedType<T, 'Edm.String'>;
  legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>;
  fiscalCalendarCalendarId: DeserializedType<T, 'Edm.String'>;
  fiscalCalendarYearName: DeserializedType<T, 'Edm.String'>;
  fiscalCalendarPeriodName: DeserializedType<T, 'Edm.String'>;
  numberSequenceScopeOperatingUnitType?: OmOperatingUnitType | null;
  numberSequenceScopeSha256Hash: DeserializedType<T, 'Edm.String'>;
  numberSequenceDatatypeDatatypeId: DeserializedType<T, 'Edm.Int32'>;
  numberSequenceExtId?: DeserializedType<T, 'Edm.String'> | null;
}
