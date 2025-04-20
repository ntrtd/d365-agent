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
import { ProjForecastSalesImport } from './ProjForecastSalesImport';

/**
 * Request builder class for operations supported on the {@link ProjForecastSalesImport} entity.
 */
export class ProjForecastSalesImportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjForecastSalesImport<T>, T> {
  /**
   * Returns a request builder for querying all `ProjForecastSalesImport` entities.
   * @returns A request builder for creating requests to retrieve all `ProjForecastSalesImport` entities.
   */
  getAll(): GetAllRequestBuilder<ProjForecastSalesImport<T>, T> {
    return new GetAllRequestBuilder<ProjForecastSalesImport<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjForecastSalesImport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjForecastSalesImport`.
   */
  create(
    entity: ProjForecastSalesImport<T>
  ): CreateRequestBuilder<ProjForecastSalesImport<T>, T> {
    return new CreateRequestBuilder<ProjForecastSalesImport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjForecastSalesImport` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjForecastSalesImport.dataAreaId}.
   * @param importId Key property. See {@link ProjForecastSalesImport.importId}.
   * @returns A request builder for creating requests to retrieve one `ProjForecastSalesImport` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    importId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProjForecastSalesImport<T>, T> {
    return new GetByKeyRequestBuilder<ProjForecastSalesImport<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImportId: importId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjForecastSalesImport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjForecastSalesImport`.
   */
  update(
    entity: ProjForecastSalesImport<T>
  ): UpdateRequestBuilder<ProjForecastSalesImport<T>, T> {
    return new UpdateRequestBuilder<ProjForecastSalesImport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjForecastSalesImport`.
   * @param dataAreaId Key property. See {@link ProjForecastSalesImport.dataAreaId}.
   * @param importId Key property. See {@link ProjForecastSalesImport.importId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjForecastSalesImport`.
   */
  delete(
    dataAreaId: string,
    importId: string
  ): DeleteRequestBuilder<ProjForecastSalesImport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjForecastSalesImport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjForecastSalesImport` by taking the entity as a parameter.
   */
  delete(
    entity: ProjForecastSalesImport<T>
  ): DeleteRequestBuilder<ProjForecastSalesImport<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    importId?: string
  ): DeleteRequestBuilder<ProjForecastSalesImport<T>, T> {
    return new DeleteRequestBuilder<ProjForecastSalesImport<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjForecastSalesImport
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImportId: importId!
          }
    );
  }
}
