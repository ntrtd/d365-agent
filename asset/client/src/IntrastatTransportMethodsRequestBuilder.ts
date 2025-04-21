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
import { IntrastatTransportMethods } from './IntrastatTransportMethods';

/**
 * Request builder class for operations supported on the {@link IntrastatTransportMethods} entity.
 */
export class IntrastatTransportMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatTransportMethods<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatTransportMethods` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatTransportMethods` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatTransportMethods<T>, T> {
    return new GetAllRequestBuilder<IntrastatTransportMethods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatTransportMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatTransportMethods`.
   */
  create(
    entity: IntrastatTransportMethods<T>
  ): CreateRequestBuilder<IntrastatTransportMethods<T>, T> {
    return new CreateRequestBuilder<IntrastatTransportMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatTransportMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatTransportMethods.dataAreaId}.
   * @param transport Key property. See {@link IntrastatTransportMethods.transport}.
   * @returns A request builder for creating requests to retrieve one `IntrastatTransportMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transport: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatTransportMethods<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatTransportMethods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Transport: transport
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatTransportMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatTransportMethods`.
   */
  update(
    entity: IntrastatTransportMethods<T>
  ): UpdateRequestBuilder<IntrastatTransportMethods<T>, T> {
    return new UpdateRequestBuilder<IntrastatTransportMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatTransportMethods`.
   * @param dataAreaId Key property. See {@link IntrastatTransportMethods.dataAreaId}.
   * @param transport Key property. See {@link IntrastatTransportMethods.transport}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatTransportMethods`.
   */
  delete(
    dataAreaId: string,
    transport: string
  ): DeleteRequestBuilder<IntrastatTransportMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatTransportMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatTransportMethods` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatTransportMethods<T>
  ): DeleteRequestBuilder<IntrastatTransportMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transport?: string
  ): DeleteRequestBuilder<IntrastatTransportMethods<T>, T> {
    return new DeleteRequestBuilder<IntrastatTransportMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatTransportMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Transport: transport!
          }
    );
  }
}
