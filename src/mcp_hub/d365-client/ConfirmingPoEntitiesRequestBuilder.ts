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
import { ConfirmingPoEntities } from './ConfirmingPoEntities';

/**
 * Request builder class for operations supported on the {@link ConfirmingPoEntities} entity.
 */
export class ConfirmingPoEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfirmingPoEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ConfirmingPoEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ConfirmingPoEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ConfirmingPoEntities<T>, T> {
    return new GetAllRequestBuilder<ConfirmingPoEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConfirmingPoEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfirmingPoEntities`.
   */
  create(
    entity: ConfirmingPoEntities<T>
  ): CreateRequestBuilder<ConfirmingPoEntities<T>, T> {
    return new CreateRequestBuilder<ConfirmingPoEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfirmingPoEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfirmingPoEntities.dataAreaId}.
   * @param confirmingPoid Key property. See {@link ConfirmingPoEntities.confirmingPoid}.
   * @param languageId Key property. See {@link ConfirmingPoEntities.languageId}.
   * @returns A request builder for creating requests to retrieve one `ConfirmingPoEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    confirmingPoid: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConfirmingPoEntities<T>, T> {
    return new GetByKeyRequestBuilder<ConfirmingPoEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConfirmingPOID: confirmingPoid,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfirmingPoEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfirmingPoEntities`.
   */
  update(
    entity: ConfirmingPoEntities<T>
  ): UpdateRequestBuilder<ConfirmingPoEntities<T>, T> {
    return new UpdateRequestBuilder<ConfirmingPoEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfirmingPoEntities`.
   * @param dataAreaId Key property. See {@link ConfirmingPoEntities.dataAreaId}.
   * @param confirmingPoid Key property. See {@link ConfirmingPoEntities.confirmingPoid}.
   * @param languageId Key property. See {@link ConfirmingPoEntities.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ConfirmingPoEntities`.
   */
  delete(
    dataAreaId: string,
    confirmingPoid: string,
    languageId: string
  ): DeleteRequestBuilder<ConfirmingPoEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfirmingPoEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfirmingPoEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ConfirmingPoEntities<T>
  ): DeleteRequestBuilder<ConfirmingPoEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    confirmingPoid?: string,
    languageId?: string
  ): DeleteRequestBuilder<ConfirmingPoEntities<T>, T> {
    return new DeleteRequestBuilder<ConfirmingPoEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfirmingPoEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConfirmingPOID: confirmingPoid!,
            LanguageId: languageId!
          }
    );
  }
}
