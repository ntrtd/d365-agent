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
import { EcoResProductBiEntities } from './EcoResProductBiEntities';

/**
 * Request builder class for operations supported on the {@link EcoResProductBiEntities} entity.
 */
export class EcoResProductBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EcoResProductBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EcoResProductBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EcoResProductBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EcoResProductBiEntities<T>, T> {
    return new GetAllRequestBuilder<EcoResProductBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EcoResProductBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EcoResProductBiEntities`.
   */
  create(
    entity: EcoResProductBiEntities<T>
  ): CreateRequestBuilder<EcoResProductBiEntities<T>, T> {
    return new CreateRequestBuilder<EcoResProductBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EcoResProductBiEntities` entity based on its keys.
   * @param displayProductNumber Key property. See {@link EcoResProductBiEntities.displayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `EcoResProductBiEntities` entity based on its keys.
   */
  getByKey(
    displayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EcoResProductBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<EcoResProductBiEntities<T>, T>(
      this.entityApi,
      { DisplayProductNumber: displayProductNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EcoResProductBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EcoResProductBiEntities`.
   */
  update(
    entity: EcoResProductBiEntities<T>
  ): UpdateRequestBuilder<EcoResProductBiEntities<T>, T> {
    return new UpdateRequestBuilder<EcoResProductBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EcoResProductBiEntities`.
   * @param displayProductNumber Key property. See {@link EcoResProductBiEntities.displayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EcoResProductBiEntities`.
   */
  delete(
    displayProductNumber: string
  ): DeleteRequestBuilder<EcoResProductBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EcoResProductBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EcoResProductBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EcoResProductBiEntities<T>
  ): DeleteRequestBuilder<EcoResProductBiEntities<T>, T>;
  delete(
    displayProductNumberOrEntity: any
  ): DeleteRequestBuilder<EcoResProductBiEntities<T>, T> {
    return new DeleteRequestBuilder<EcoResProductBiEntities<T>, T>(
      this.entityApi,
      displayProductNumberOrEntity instanceof EcoResProductBiEntities
        ? displayProductNumberOrEntity
        : { DisplayProductNumber: displayProductNumberOrEntity! }
    );
  }
}
