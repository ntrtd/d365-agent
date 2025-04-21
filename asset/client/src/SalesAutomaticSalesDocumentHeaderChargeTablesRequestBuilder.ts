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
import { SalesAutomaticSalesDocumentHeaderChargeTables } from './SalesAutomaticSalesDocumentHeaderChargeTables';

/**
 * Request builder class for operations supported on the {@link SalesAutomaticSalesDocumentHeaderChargeTables} entity.
 */
export class SalesAutomaticSalesDocumentHeaderChargeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAutomaticSalesDocumentHeaderChargeTables<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAutomaticSalesDocumentHeaderChargeTables` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAutomaticSalesDocumentHeaderChargeTables` entities.
   */
  getAll(): GetAllRequestBuilder<
    SalesAutomaticSalesDocumentHeaderChargeTables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SalesAutomaticSalesDocumentHeaderChargeTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAutomaticSalesDocumentHeaderChargeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables`.
   */
  create(
    entity: SalesAutomaticSalesDocumentHeaderChargeTables<T>
  ): CreateRequestBuilder<SalesAutomaticSalesDocumentHeaderChargeTables<T>, T> {
    return new CreateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderChargeTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesAutomaticSalesDocumentHeaderChargeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderChargeTables.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentHeaderChargeTables.description}.
   * @returns A request builder for creating requests to retrieve one `SalesAutomaticSalesDocumentHeaderChargeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SalesAutomaticSalesDocumentHeaderChargeTables<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SalesAutomaticSalesDocumentHeaderChargeTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables`.
   */
  update(
    entity: SalesAutomaticSalesDocumentHeaderChargeTables<T>
  ): UpdateRequestBuilder<SalesAutomaticSalesDocumentHeaderChargeTables<T>, T> {
    return new UpdateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderChargeTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables`.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderChargeTables.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentHeaderChargeTables.description}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables`.
   */
  delete(
    dataAreaId: string,
    description: string
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderChargeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderChargeTables` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAutomaticSalesDocumentHeaderChargeTables<T>
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderChargeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: string
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderChargeTables<T>, T> {
    return new DeleteRequestBuilder<
      SalesAutomaticSalesDocumentHeaderChargeTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SalesAutomaticSalesDocumentHeaderChargeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!
          }
    );
  }
}
