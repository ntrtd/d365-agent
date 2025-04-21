/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { WarehouseNumberSequenceExtReferences } from './WarehouseNumberSequenceExtReferences';
import { OmOperatingUnitType } from './OmOperatingUnitType';

/**
 * Request builder class for operations supported on the {@link WarehouseNumberSequenceExtReferences} entity.
 */
export class WarehouseNumberSequenceExtReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseNumberSequenceExtReferences<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseNumberSequenceExtReferences` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseNumberSequenceExtReferences` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T> {
    return new GetAllRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseNumberSequenceExtReferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseNumberSequenceExtReferences`.
   */
  create(
    entity: WarehouseNumberSequenceExtReferences<T>
  ): CreateRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T> {
    return new CreateRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseNumberSequenceExtReferences` entity based on its keys.
   * @param numberSequenceScopeDataArea Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceScopeDataArea}.
   * @param legalEntityDataArea Key property. See {@link WarehouseNumberSequenceExtReferences.legalEntityDataArea}.
   * @param operatingUnitPartyNumber Key property. See {@link WarehouseNumberSequenceExtReferences.operatingUnitPartyNumber}.
   * @param fiscalCalendarCalendarId Key property. See {@link WarehouseNumberSequenceExtReferences.fiscalCalendarCalendarId}.
   * @param fiscalCalendarYearName Key property. See {@link WarehouseNumberSequenceExtReferences.fiscalCalendarYearName}.
   * @param fiscalCalendarPeriodName Key property. See {@link WarehouseNumberSequenceExtReferences.fiscalCalendarPeriodName}.
   * @param numberSequenceScopeOperatingUnitType Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceScopeOperatingUnitType}.
   * @param numberSequenceScopeSha256Hash Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceScopeSha256Hash}.
   * @param numberSequenceDatatypeDatatypeId Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceDatatypeDatatypeId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseNumberSequenceExtReferences` entity based on its keys.
   */
  getByKey(
    numberSequenceScopeDataArea: DeserializedType<T, 'Edm.String'>,
    legalEntityDataArea: DeserializedType<T, 'Edm.String'>,
    operatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>,
    fiscalCalendarCalendarId: DeserializedType<T, 'Edm.String'>,
    fiscalCalendarYearName: DeserializedType<T, 'Edm.String'>,
    fiscalCalendarPeriodName: DeserializedType<T, 'Edm.String'>,
    numberSequenceScopeOperatingUnitType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OMOperatingUnitType'
    >,
    numberSequenceScopeSha256Hash: DeserializedType<T, 'Edm.String'>,
    numberSequenceDatatypeDatatypeId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T> {
    return new GetByKeyRequestBuilder<
      WarehouseNumberSequenceExtReferences<T>,
      T
    >(this.entityApi, {
      NumberSequenceScope_DataArea: numberSequenceScopeDataArea,
      LegalEntity_DataArea: legalEntityDataArea,
      OperatingUnit_PartyNumber: operatingUnitPartyNumber,
      FiscalCalendar_CalendarId: fiscalCalendarCalendarId,
      FiscalCalendarYear_Name: fiscalCalendarYearName,
      FiscalCalendarPeriod_Name: fiscalCalendarPeriodName,
      NumberSequenceScope_OperatingUnitType:
        numberSequenceScopeOperatingUnitType,
      NumberSequenceScope_SHA256Hash: numberSequenceScopeSha256Hash,
      NumberSequenceDatatype_DatatypeId: numberSequenceDatatypeDatatypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseNumberSequenceExtReferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseNumberSequenceExtReferences`.
   */
  update(
    entity: WarehouseNumberSequenceExtReferences<T>
  ): UpdateRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T> {
    return new UpdateRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseNumberSequenceExtReferences`.
   * @param numberSequenceScopeDataArea Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceScopeDataArea}.
   * @param legalEntityDataArea Key property. See {@link WarehouseNumberSequenceExtReferences.legalEntityDataArea}.
   * @param operatingUnitPartyNumber Key property. See {@link WarehouseNumberSequenceExtReferences.operatingUnitPartyNumber}.
   * @param fiscalCalendarCalendarId Key property. See {@link WarehouseNumberSequenceExtReferences.fiscalCalendarCalendarId}.
   * @param fiscalCalendarYearName Key property. See {@link WarehouseNumberSequenceExtReferences.fiscalCalendarYearName}.
   * @param fiscalCalendarPeriodName Key property. See {@link WarehouseNumberSequenceExtReferences.fiscalCalendarPeriodName}.
   * @param numberSequenceScopeOperatingUnitType Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceScopeOperatingUnitType}.
   * @param numberSequenceScopeSha256Hash Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceScopeSha256Hash}.
   * @param numberSequenceDatatypeDatatypeId Key property. See {@link WarehouseNumberSequenceExtReferences.numberSequenceDatatypeDatatypeId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseNumberSequenceExtReferences`.
   */
  delete(
    numberSequenceScopeDataArea: string,
    legalEntityDataArea: string,
    operatingUnitPartyNumber: string,
    fiscalCalendarCalendarId: string,
    fiscalCalendarYearName: string,
    fiscalCalendarPeriodName: string,
    numberSequenceScopeOperatingUnitType: OmOperatingUnitType,
    numberSequenceScopeSha256Hash: string,
    numberSequenceDatatypeDatatypeId: number
  ): DeleteRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseNumberSequenceExtReferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseNumberSequenceExtReferences` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseNumberSequenceExtReferences<T>
  ): DeleteRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T>;
  delete(
    numberSequenceScopeDataAreaOrEntity: any,
    legalEntityDataArea?: string,
    operatingUnitPartyNumber?: string,
    fiscalCalendarCalendarId?: string,
    fiscalCalendarYearName?: string,
    fiscalCalendarPeriodName?: string,
    numberSequenceScopeOperatingUnitType?: OmOperatingUnitType,
    numberSequenceScopeSha256Hash?: string,
    numberSequenceDatatypeDatatypeId?: number
  ): DeleteRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T> {
    return new DeleteRequestBuilder<WarehouseNumberSequenceExtReferences<T>, T>(
      this.entityApi,
      numberSequenceScopeDataAreaOrEntity instanceof
      WarehouseNumberSequenceExtReferences
        ? numberSequenceScopeDataAreaOrEntity
        : {
            NumberSequenceScope_DataArea: numberSequenceScopeDataAreaOrEntity!,
            LegalEntity_DataArea: legalEntityDataArea!,
            OperatingUnit_PartyNumber: operatingUnitPartyNumber!,
            FiscalCalendar_CalendarId: fiscalCalendarCalendarId!,
            FiscalCalendarYear_Name: fiscalCalendarYearName!,
            FiscalCalendarPeriod_Name: fiscalCalendarPeriodName!,
            NumberSequenceScope_OperatingUnitType:
              numberSequenceScopeOperatingUnitType!,
            NumberSequenceScope_SHA256Hash: numberSequenceScopeSha256Hash!,
            NumberSequenceDatatype_DatatypeId: numberSequenceDatatypeDatatypeId!
          }
    );
  }
}
