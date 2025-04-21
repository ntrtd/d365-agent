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
import { VivaIntEssHcmWorkerContacts } from './VivaIntEssHcmWorkerContacts';

/**
 * Request builder class for operations supported on the {@link VivaIntEssHcmWorkerContacts} entity.
 */
export class VivaIntEssHcmWorkerContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VivaIntEssHcmWorkerContacts<T>, T> {
  /**
   * Returns a request builder for querying all `VivaIntEssHcmWorkerContacts` entities.
   * @returns A request builder for creating requests to retrieve all `VivaIntEssHcmWorkerContacts` entities.
   */
  getAll(): GetAllRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T> {
    return new GetAllRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VivaIntEssHcmWorkerContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VivaIntEssHcmWorkerContacts`.
   */
  create(
    entity: VivaIntEssHcmWorkerContacts<T>
  ): CreateRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T> {
    return new CreateRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VivaIntEssHcmWorkerContacts` entity based on its keys.
   * @param personnelNumber Key property. See {@link VivaIntEssHcmWorkerContacts.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `VivaIntEssHcmWorkerContacts` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T> {
    return new GetByKeyRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>(
      this.entityApi,
      { PersonnelNumber: personnelNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VivaIntEssHcmWorkerContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VivaIntEssHcmWorkerContacts`.
   */
  update(
    entity: VivaIntEssHcmWorkerContacts<T>
  ): UpdateRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T> {
    return new UpdateRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VivaIntEssHcmWorkerContacts`.
   * @param personnelNumber Key property. See {@link VivaIntEssHcmWorkerContacts.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VivaIntEssHcmWorkerContacts`.
   */
  delete(
    personnelNumber: string
  ): DeleteRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VivaIntEssHcmWorkerContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VivaIntEssHcmWorkerContacts` by taking the entity as a parameter.
   */
  delete(
    entity: VivaIntEssHcmWorkerContacts<T>
  ): DeleteRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T> {
    return new DeleteRequestBuilder<VivaIntEssHcmWorkerContacts<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof VivaIntEssHcmWorkerContacts
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
