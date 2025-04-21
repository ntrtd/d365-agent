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
import { SalesBookVatProcessParameters } from './SalesBookVatProcessParameters';

/**
 * Request builder class for operations supported on the {@link SalesBookVatProcessParameters} entity.
 */
export class SalesBookVatProcessParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesBookVatProcessParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SalesBookVatProcessParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SalesBookVatProcessParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SalesBookVatProcessParameters<T>, T> {
    return new GetAllRequestBuilder<SalesBookVatProcessParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesBookVatProcessParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesBookVatProcessParameters`.
   */
  create(
    entity: SalesBookVatProcessParameters<T>
  ): CreateRequestBuilder<SalesBookVatProcessParameters<T>, T> {
    return new CreateRequestBuilder<SalesBookVatProcessParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesBookVatProcessParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesBookVatProcessParameters.dataAreaId}.
   * @param vatOperationCode Key property. See {@link SalesBookVatProcessParameters.vatOperationCode}.
   * @returns A request builder for creating requests to retrieve one `SalesBookVatProcessParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vatOperationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesBookVatProcessParameters<T>, T> {
    return new GetByKeyRequestBuilder<SalesBookVatProcessParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VATOperationCode: vatOperationCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesBookVatProcessParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesBookVatProcessParameters`.
   */
  update(
    entity: SalesBookVatProcessParameters<T>
  ): UpdateRequestBuilder<SalesBookVatProcessParameters<T>, T> {
    return new UpdateRequestBuilder<SalesBookVatProcessParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesBookVatProcessParameters`.
   * @param dataAreaId Key property. See {@link SalesBookVatProcessParameters.dataAreaId}.
   * @param vatOperationCode Key property. See {@link SalesBookVatProcessParameters.vatOperationCode}.
   * @returns A request builder for creating requests that delete an entity of type `SalesBookVatProcessParameters`.
   */
  delete(
    dataAreaId: string,
    vatOperationCode: string
  ): DeleteRequestBuilder<SalesBookVatProcessParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesBookVatProcessParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesBookVatProcessParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SalesBookVatProcessParameters<T>
  ): DeleteRequestBuilder<SalesBookVatProcessParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vatOperationCode?: string
  ): DeleteRequestBuilder<SalesBookVatProcessParameters<T>, T> {
    return new DeleteRequestBuilder<SalesBookVatProcessParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesBookVatProcessParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VATOperationCode: vatOperationCode!
          }
    );
  }
}
