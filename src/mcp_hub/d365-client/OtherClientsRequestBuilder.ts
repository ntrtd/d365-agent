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
import { OtherClients } from './OtherClients';

/**
 * Request builder class for operations supported on the {@link OtherClients} entity.
 */
export class OtherClientsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OtherClients<T>, T> {
  /**
   * Returns a request builder for querying all `OtherClients` entities.
   * @returns A request builder for creating requests to retrieve all `OtherClients` entities.
   */
  getAll(): GetAllRequestBuilder<OtherClients<T>, T> {
    return new GetAllRequestBuilder<OtherClients<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OtherClients` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OtherClients`.
   */
  create(entity: OtherClients<T>): CreateRequestBuilder<OtherClients<T>, T> {
    return new CreateRequestBuilder<OtherClients<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OtherClients` entity based on its keys.
   * @param dataAreaId Key property. See {@link OtherClients.dataAreaId}.
   * @param code Key property. See {@link OtherClients.code}.
   * @returns A request builder for creating requests to retrieve one `OtherClients` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OtherClients<T>, T> {
    return new GetByKeyRequestBuilder<OtherClients<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OtherClients`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OtherClients`.
   */
  update(entity: OtherClients<T>): UpdateRequestBuilder<OtherClients<T>, T> {
    return new UpdateRequestBuilder<OtherClients<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OtherClients`.
   * @param dataAreaId Key property. See {@link OtherClients.dataAreaId}.
   * @param code Key property. See {@link OtherClients.code}.
   * @returns A request builder for creating requests that delete an entity of type `OtherClients`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<OtherClients<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OtherClients`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OtherClients` by taking the entity as a parameter.
   */
  delete(entity: OtherClients<T>): DeleteRequestBuilder<OtherClients<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<OtherClients<T>, T> {
    return new DeleteRequestBuilder<OtherClients<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OtherClients
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
