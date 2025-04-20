/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { UsTaxTransactionHistories } from './UsTaxTransactionHistories';

/**
 * Request builder class for operations supported on the {@link UsTaxTransactionHistories} entity.
 */
export class UsTaxTransactionHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UsTaxTransactionHistories<T>, T> {
  /**
   * Returns a request builder for querying all `UsTaxTransactionHistories` entities.
   * @returns A request builder for creating requests to retrieve all `UsTaxTransactionHistories` entities.
   */
  getAll(): GetAllRequestBuilder<UsTaxTransactionHistories<T>, T> {
    return new GetAllRequestBuilder<UsTaxTransactionHistories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UsTaxTransactionHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UsTaxTransactionHistories`.
   */
  create(
    entity: UsTaxTransactionHistories<T>
  ): CreateRequestBuilder<UsTaxTransactionHistories<T>, T> {
    return new CreateRequestBuilder<UsTaxTransactionHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UsTaxTransactionHistories` entity based on its keys.
   * @param personnelNumber Key property. See {@link UsTaxTransactionHistories.personnelNumber}.
   * @param taxCodeId Key property. See {@link UsTaxTransactionHistories.taxCodeId}.
   * @param transDate Key property. See {@link UsTaxTransactionHistories.transDate}.
   * @param countryRegionId Key property. See {@link UsTaxTransactionHistories.countryRegionId}.
   * @param sequenceNumber Key property. See {@link UsTaxTransactionHistories.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `UsTaxTransactionHistories` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UsTaxTransactionHistories<T>, T> {
    return new GetByKeyRequestBuilder<UsTaxTransactionHistories<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        TaxCodeId: taxCodeId,
        TransDate: transDate,
        CountryRegionId: countryRegionId,
        SequenceNumber: sequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UsTaxTransactionHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UsTaxTransactionHistories`.
   */
  update(
    entity: UsTaxTransactionHistories<T>
  ): UpdateRequestBuilder<UsTaxTransactionHistories<T>, T> {
    return new UpdateRequestBuilder<UsTaxTransactionHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UsTaxTransactionHistories`.
   * @param personnelNumber Key property. See {@link UsTaxTransactionHistories.personnelNumber}.
   * @param taxCodeId Key property. See {@link UsTaxTransactionHistories.taxCodeId}.
   * @param transDate Key property. See {@link UsTaxTransactionHistories.transDate}.
   * @param countryRegionId Key property. See {@link UsTaxTransactionHistories.countryRegionId}.
   * @param sequenceNumber Key property. See {@link UsTaxTransactionHistories.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `UsTaxTransactionHistories`.
   */
  delete(
    personnelNumber: string,
    taxCodeId: string,
    transDate: Moment,
    countryRegionId: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<UsTaxTransactionHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UsTaxTransactionHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UsTaxTransactionHistories` by taking the entity as a parameter.
   */
  delete(
    entity: UsTaxTransactionHistories<T>
  ): DeleteRequestBuilder<UsTaxTransactionHistories<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    taxCodeId?: string,
    transDate?: Moment,
    countryRegionId?: string,
    sequenceNumber?: number
  ): DeleteRequestBuilder<UsTaxTransactionHistories<T>, T> {
    return new DeleteRequestBuilder<UsTaxTransactionHistories<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof UsTaxTransactionHistories
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            TaxCodeId: taxCodeId!,
            TransDate: transDate!,
            CountryRegionId: countryRegionId!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
