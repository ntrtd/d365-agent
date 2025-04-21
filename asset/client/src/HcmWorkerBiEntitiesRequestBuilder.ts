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
import { HcmWorkerBiEntities } from './HcmWorkerBiEntities';

/**
 * Request builder class for operations supported on the {@link HcmWorkerBiEntities} entity.
 */
export class HcmWorkerBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmWorkerBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `HcmWorkerBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `HcmWorkerBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<HcmWorkerBiEntities<T>, T> {
    return new GetAllRequestBuilder<HcmWorkerBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HcmWorkerBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmWorkerBiEntities`.
   */
  create(
    entity: HcmWorkerBiEntities<T>
  ): CreateRequestBuilder<HcmWorkerBiEntities<T>, T> {
    return new CreateRequestBuilder<HcmWorkerBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmWorkerBiEntities` entity based on its keys.
   * @param personnelNumber Key property. See {@link HcmWorkerBiEntities.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `HcmWorkerBiEntities` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HcmWorkerBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<HcmWorkerBiEntities<T>, T>(
      this.entityApi,
      { PersonnelNumber: personnelNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HcmWorkerBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmWorkerBiEntities`.
   */
  update(
    entity: HcmWorkerBiEntities<T>
  ): UpdateRequestBuilder<HcmWorkerBiEntities<T>, T> {
    return new UpdateRequestBuilder<HcmWorkerBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerBiEntities`.
   * @param personnelNumber Key property. See {@link HcmWorkerBiEntities.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerBiEntities`.
   */
  delete(
    personnelNumber: string
  ): DeleteRequestBuilder<HcmWorkerBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmWorkerBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmWorkerBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: HcmWorkerBiEntities<T>
  ): DeleteRequestBuilder<HcmWorkerBiEntities<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<HcmWorkerBiEntities<T>, T> {
    return new DeleteRequestBuilder<HcmWorkerBiEntities<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof HcmWorkerBiEntities
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
