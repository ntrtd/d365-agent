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
import { SalesAutomaticSalesDocumentLineChargeTables } from './SalesAutomaticSalesDocumentLineChargeTables';

/**
 * Request builder class for operations supported on the {@link SalesAutomaticSalesDocumentLineChargeTables} entity.
 */
export class SalesAutomaticSalesDocumentLineChargeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAutomaticSalesDocumentLineChargeTables` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAutomaticSalesDocumentLineChargeTables` entities.
   */
  getAll(): GetAllRequestBuilder<
    SalesAutomaticSalesDocumentLineChargeTables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SalesAutomaticSalesDocumentLineChargeTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAutomaticSalesDocumentLineChargeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAutomaticSalesDocumentLineChargeTables`.
   */
  create(
    entity: SalesAutomaticSalesDocumentLineChargeTables<T>
  ): CreateRequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T> {
    return new CreateRequestBuilder<
      SalesAutomaticSalesDocumentLineChargeTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesAutomaticSalesDocumentLineChargeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentLineChargeTables.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentLineChargeTables.description}.
   * @returns A request builder for creating requests to retrieve one `SalesAutomaticSalesDocumentLineChargeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesAutomaticSalesDocumentLineChargeTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAutomaticSalesDocumentLineChargeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAutomaticSalesDocumentLineChargeTables`.
   */
  update(
    entity: SalesAutomaticSalesDocumentLineChargeTables<T>
  ): UpdateRequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T> {
    return new UpdateRequestBuilder<
      SalesAutomaticSalesDocumentLineChargeTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentLineChargeTables`.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentLineChargeTables.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentLineChargeTables.description}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentLineChargeTables`.
   */
  delete(
    dataAreaId: string,
    description: string
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentLineChargeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentLineChargeTables` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAutomaticSalesDocumentLineChargeTables<T>
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: string
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentLineChargeTables<T>, T> {
    return new DeleteRequestBuilder<
      SalesAutomaticSalesDocumentLineChargeTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAutomaticSalesDocumentLineChargeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!
          }
    );
  }
}
