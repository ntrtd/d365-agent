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
import { EmergencyResponses } from './EmergencyResponses';

/**
 * Request builder class for operations supported on the {@link EmergencyResponses} entity.
 */
export class EmergencyResponsesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmergencyResponses<T>, T> {
  /**
   * Returns a request builder for querying all `EmergencyResponses` entities.
   * @returns A request builder for creating requests to retrieve all `EmergencyResponses` entities.
   */
  getAll(): GetAllRequestBuilder<EmergencyResponses<T>, T> {
    return new GetAllRequestBuilder<EmergencyResponses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmergencyResponses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmergencyResponses`.
   */
  create(
    entity: EmergencyResponses<T>
  ): CreateRequestBuilder<EmergencyResponses<T>, T> {
    return new CreateRequestBuilder<EmergencyResponses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmergencyResponses` entity based on its keys.
   * @param emsCode Key property. See {@link EmergencyResponses.emsCode}.
   * @returns A request builder for creating requests to retrieve one `EmergencyResponses` entity based on its keys.
   */
  getByKey(
    emsCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmergencyResponses<T>, T> {
    return new GetByKeyRequestBuilder<EmergencyResponses<T>, T>(
      this.entityApi,
      { EMSCode: emsCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmergencyResponses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmergencyResponses`.
   */
  update(
    entity: EmergencyResponses<T>
  ): UpdateRequestBuilder<EmergencyResponses<T>, T> {
    return new UpdateRequestBuilder<EmergencyResponses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmergencyResponses`.
   * @param emsCode Key property. See {@link EmergencyResponses.emsCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmergencyResponses`.
   */
  delete(emsCode: string): DeleteRequestBuilder<EmergencyResponses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmergencyResponses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmergencyResponses` by taking the entity as a parameter.
   */
  delete(
    entity: EmergencyResponses<T>
  ): DeleteRequestBuilder<EmergencyResponses<T>, T>;
  delete(emsCodeOrEntity: any): DeleteRequestBuilder<EmergencyResponses<T>, T> {
    return new DeleteRequestBuilder<EmergencyResponses<T>, T>(
      this.entityApi,
      emsCodeOrEntity instanceof EmergencyResponses
        ? emsCodeOrEntity
        : { EMSCode: emsCodeOrEntity! }
    );
  }
}
