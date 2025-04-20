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
import { TaxCommunicationSetups } from './TaxCommunicationSetups';

/**
 * Request builder class for operations supported on the {@link TaxCommunicationSetups} entity.
 */
export class TaxCommunicationSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCommunicationSetups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxCommunicationSetups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCommunicationSetups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCommunicationSetups<T>, T> {
    return new GetAllRequestBuilder<TaxCommunicationSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxCommunicationSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCommunicationSetups`.
   */
  create(
    entity: TaxCommunicationSetups<T>
  ): CreateRequestBuilder<TaxCommunicationSetups<T>, T> {
    return new CreateRequestBuilder<TaxCommunicationSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxCommunicationSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxCommunicationSetups.dataAreaId}.
   * @param fieldId Key property. See {@link TaxCommunicationSetups.fieldId}.
   * @param totalFieldId Key property. See {@link TaxCommunicationSetups.totalFieldId}.
   * @param salesTaxCode Key property. See {@link TaxCommunicationSetups.salesTaxCode}.
   * @returns A request builder for creating requests to retrieve one `TaxCommunicationSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fieldId: DeserializedType<T, 'Edm.String'>,
    totalFieldId: DeserializedType<T, 'Edm.String'>,
    salesTaxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxCommunicationSetups<T>, T> {
    return new GetByKeyRequestBuilder<TaxCommunicationSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FieldID: fieldId,
        TotalFieldID: totalFieldId,
        SalesTaxCode: salesTaxCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCommunicationSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCommunicationSetups`.
   */
  update(
    entity: TaxCommunicationSetups<T>
  ): UpdateRequestBuilder<TaxCommunicationSetups<T>, T> {
    return new UpdateRequestBuilder<TaxCommunicationSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCommunicationSetups`.
   * @param dataAreaId Key property. See {@link TaxCommunicationSetups.dataAreaId}.
   * @param fieldId Key property. See {@link TaxCommunicationSetups.fieldId}.
   * @param totalFieldId Key property. See {@link TaxCommunicationSetups.totalFieldId}.
   * @param salesTaxCode Key property. See {@link TaxCommunicationSetups.salesTaxCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCommunicationSetups`.
   */
  delete(
    dataAreaId: string,
    fieldId: string,
    totalFieldId: string,
    salesTaxCode: string
  ): DeleteRequestBuilder<TaxCommunicationSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCommunicationSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCommunicationSetups` by taking the entity as a parameter.
   */
  delete(
    entity: TaxCommunicationSetups<T>
  ): DeleteRequestBuilder<TaxCommunicationSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fieldId?: string,
    totalFieldId?: string,
    salesTaxCode?: string
  ): DeleteRequestBuilder<TaxCommunicationSetups<T>, T> {
    return new DeleteRequestBuilder<TaxCommunicationSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxCommunicationSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FieldID: fieldId!,
            TotalFieldID: totalFieldId!,
            SalesTaxCode: salesTaxCode!
          }
    );
  }
}
