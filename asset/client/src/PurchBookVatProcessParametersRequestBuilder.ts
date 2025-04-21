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
import { PurchBookVatProcessParameters } from './PurchBookVatProcessParameters';

/**
 * Request builder class for operations supported on the {@link PurchBookVatProcessParameters} entity.
 */
export class PurchBookVatProcessParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchBookVatProcessParameters<T>, T> {
  /**
   * Returns a request builder for querying all `PurchBookVatProcessParameters` entities.
   * @returns A request builder for creating requests to retrieve all `PurchBookVatProcessParameters` entities.
   */
  getAll(): GetAllRequestBuilder<PurchBookVatProcessParameters<T>, T> {
    return new GetAllRequestBuilder<PurchBookVatProcessParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchBookVatProcessParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchBookVatProcessParameters`.
   */
  create(
    entity: PurchBookVatProcessParameters<T>
  ): CreateRequestBuilder<PurchBookVatProcessParameters<T>, T> {
    return new CreateRequestBuilder<PurchBookVatProcessParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchBookVatProcessParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchBookVatProcessParameters.dataAreaId}.
   * @param vatOperationCode Key property. See {@link PurchBookVatProcessParameters.vatOperationCode}.
   * @returns A request builder for creating requests to retrieve one `PurchBookVatProcessParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vatOperationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchBookVatProcessParameters<T>, T> {
    return new GetByKeyRequestBuilder<PurchBookVatProcessParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VATOperationCode: vatOperationCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchBookVatProcessParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchBookVatProcessParameters`.
   */
  update(
    entity: PurchBookVatProcessParameters<T>
  ): UpdateRequestBuilder<PurchBookVatProcessParameters<T>, T> {
    return new UpdateRequestBuilder<PurchBookVatProcessParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchBookVatProcessParameters`.
   * @param dataAreaId Key property. See {@link PurchBookVatProcessParameters.dataAreaId}.
   * @param vatOperationCode Key property. See {@link PurchBookVatProcessParameters.vatOperationCode}.
   * @returns A request builder for creating requests that delete an entity of type `PurchBookVatProcessParameters`.
   */
  delete(
    dataAreaId: string,
    vatOperationCode: string
  ): DeleteRequestBuilder<PurchBookVatProcessParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchBookVatProcessParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchBookVatProcessParameters` by taking the entity as a parameter.
   */
  delete(
    entity: PurchBookVatProcessParameters<T>
  ): DeleteRequestBuilder<PurchBookVatProcessParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vatOperationCode?: string
  ): DeleteRequestBuilder<PurchBookVatProcessParameters<T>, T> {
    return new DeleteRequestBuilder<PurchBookVatProcessParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchBookVatProcessParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VATOperationCode: vatOperationCode!
          }
    );
  }
}
