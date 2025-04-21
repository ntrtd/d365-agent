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
import { WithholdingTaxCodeValues } from './WithholdingTaxCodeValues';

/**
 * Request builder class for operations supported on the {@link WithholdingTaxCodeValues} entity.
 */
export class WithholdingTaxCodeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingTaxCodeValues<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingTaxCodeValues` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingTaxCodeValues` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingTaxCodeValues<T>, T> {
    return new GetAllRequestBuilder<WithholdingTaxCodeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdingTaxCodeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingTaxCodeValues`.
   */
  create(
    entity: WithholdingTaxCodeValues<T>
  ): CreateRequestBuilder<WithholdingTaxCodeValues<T>, T> {
    return new CreateRequestBuilder<WithholdingTaxCodeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingTaxCodeValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingTaxCodeValues.dataAreaId}.
   * @param taxWithholdCodeId Key property. See {@link WithholdingTaxCodeValues.taxWithholdCodeId}.
   * @param fromDate Key property. See {@link WithholdingTaxCodeValues.fromDate}.
   * @param toDate Key property. See {@link WithholdingTaxCodeValues.toDate}.
   * @returns A request builder for creating requests to retrieve one `WithholdingTaxCodeValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxWithholdCodeId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WithholdingTaxCodeValues<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingTaxCodeValues<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxWithholdCodeId: taxWithholdCodeId,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingTaxCodeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingTaxCodeValues`.
   */
  update(
    entity: WithholdingTaxCodeValues<T>
  ): UpdateRequestBuilder<WithholdingTaxCodeValues<T>, T> {
    return new UpdateRequestBuilder<WithholdingTaxCodeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxCodeValues`.
   * @param dataAreaId Key property. See {@link WithholdingTaxCodeValues.dataAreaId}.
   * @param taxWithholdCodeId Key property. See {@link WithholdingTaxCodeValues.taxWithholdCodeId}.
   * @param fromDate Key property. See {@link WithholdingTaxCodeValues.fromDate}.
   * @param toDate Key property. See {@link WithholdingTaxCodeValues.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodeValues`.
   */
  delete(
    dataAreaId: string,
    taxWithholdCodeId: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<WithholdingTaxCodeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxCodeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodeValues` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingTaxCodeValues<T>
  ): DeleteRequestBuilder<WithholdingTaxCodeValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxWithholdCodeId?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<WithholdingTaxCodeValues<T>, T> {
    return new DeleteRequestBuilder<WithholdingTaxCodeValues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingTaxCodeValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxWithholdCodeId: taxWithholdCodeId!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
