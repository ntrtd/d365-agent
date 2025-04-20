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
import { HazardousMaterialPackingGroups } from './HazardousMaterialPackingGroups';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialPackingGroups} entity.
 */
export class HazardousMaterialPackingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialPackingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialPackingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialPackingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialPackingGroups<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialPackingGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialPackingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialPackingGroups`.
   */
  create(
    entity: HazardousMaterialPackingGroups<T>
  ): CreateRequestBuilder<HazardousMaterialPackingGroups<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialPackingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialPackingGroups` entity based on its keys.
   * @param packingGroupCode Key property. See {@link HazardousMaterialPackingGroups.packingGroupCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialPackingGroups` entity based on its keys.
   */
  getByKey(
    packingGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialPackingGroups<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialPackingGroups<T>, T>(
      this.entityApi,
      { PackingGroupCode: packingGroupCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialPackingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialPackingGroups`.
   */
  update(
    entity: HazardousMaterialPackingGroups<T>
  ): UpdateRequestBuilder<HazardousMaterialPackingGroups<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialPackingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialPackingGroups`.
   * @param packingGroupCode Key property. See {@link HazardousMaterialPackingGroups.packingGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialPackingGroups`.
   */
  delete(
    packingGroupCode: string
  ): DeleteRequestBuilder<HazardousMaterialPackingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialPackingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialPackingGroups` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialPackingGroups<T>
  ): DeleteRequestBuilder<HazardousMaterialPackingGroups<T>, T>;
  delete(
    packingGroupCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialPackingGroups<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialPackingGroups<T>, T>(
      this.entityApi,
      packingGroupCodeOrEntity instanceof HazardousMaterialPackingGroups
        ? packingGroupCodeOrEntity
        : { PackingGroupCode: packingGroupCodeOrEntity! }
    );
  }
}
