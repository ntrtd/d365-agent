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
import { EfDocAuthorityStates } from './EfDocAuthorityStates';

/**
 * Request builder class for operations supported on the {@link EfDocAuthorityStates} entity.
 */
export class EfDocAuthorityStatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocAuthorityStates<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocAuthorityStates` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocAuthorityStates` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocAuthorityStates<T>, T> {
    return new GetAllRequestBuilder<EfDocAuthorityStates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EfDocAuthorityStates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocAuthorityStates`.
   */
  create(
    entity: EfDocAuthorityStates<T>
  ): CreateRequestBuilder<EfDocAuthorityStates<T>, T> {
    return new CreateRequestBuilder<EfDocAuthorityStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocAuthorityStates` entity based on its keys.
   * @param authority Key property. See {@link EfDocAuthorityStates.authority}.
   * @param state Key property. See {@link EfDocAuthorityStates.state}.
   * @returns A request builder for creating requests to retrieve one `EfDocAuthorityStates` entity based on its keys.
   */
  getByKey(
    authority: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EfDocAuthorityStates<T>, T> {
    return new GetByKeyRequestBuilder<EfDocAuthorityStates<T>, T>(
      this.entityApi,
      {
        Authority: authority,
        State: state
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocAuthorityStates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocAuthorityStates`.
   */
  update(
    entity: EfDocAuthorityStates<T>
  ): UpdateRequestBuilder<EfDocAuthorityStates<T>, T> {
    return new UpdateRequestBuilder<EfDocAuthorityStates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocAuthorityStates`.
   * @param authority Key property. See {@link EfDocAuthorityStates.authority}.
   * @param state Key property. See {@link EfDocAuthorityStates.state}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocAuthorityStates`.
   */
  delete(
    authority: string,
    state: string
  ): DeleteRequestBuilder<EfDocAuthorityStates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocAuthorityStates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocAuthorityStates` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocAuthorityStates<T>
  ): DeleteRequestBuilder<EfDocAuthorityStates<T>, T>;
  delete(
    authorityOrEntity: any,
    state?: string
  ): DeleteRequestBuilder<EfDocAuthorityStates<T>, T> {
    return new DeleteRequestBuilder<EfDocAuthorityStates<T>, T>(
      this.entityApi,
      authorityOrEntity instanceof EfDocAuthorityStates
        ? authorityOrEntity
        : {
            Authority: authorityOrEntity!,
            State: state!
          }
    );
  }
}
