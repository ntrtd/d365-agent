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
import { AdvancedRuleStructureActivations } from './AdvancedRuleStructureActivations';

/**
 * Request builder class for operations supported on the {@link AdvancedRuleStructureActivations} entity.
 */
export class AdvancedRuleStructureActivationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvancedRuleStructureActivations<T>, T> {
  /**
   * Returns a request builder for querying all `AdvancedRuleStructureActivations` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancedRuleStructureActivations` entities.
   */
  getAll(): GetAllRequestBuilder<AdvancedRuleStructureActivations<T>, T> {
    return new GetAllRequestBuilder<AdvancedRuleStructureActivations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AdvancedRuleStructureActivations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvancedRuleStructureActivations`.
   */
  create(
    entity: AdvancedRuleStructureActivations<T>
  ): CreateRequestBuilder<AdvancedRuleStructureActivations<T>, T> {
    return new CreateRequestBuilder<AdvancedRuleStructureActivations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdvancedRuleStructureActivations` entity based on its keys.
   * @param advancedRuleStructure Key property. See {@link AdvancedRuleStructureActivations.advancedRuleStructure}.
   * @returns A request builder for creating requests to retrieve one `AdvancedRuleStructureActivations` entity based on its keys.
   */
  getByKey(
    advancedRuleStructure: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdvancedRuleStructureActivations<T>, T> {
    return new GetByKeyRequestBuilder<AdvancedRuleStructureActivations<T>, T>(
      this.entityApi,
      { AdvancedRuleStructure: advancedRuleStructure }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdvancedRuleStructureActivations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvancedRuleStructureActivations`.
   */
  update(
    entity: AdvancedRuleStructureActivations<T>
  ): UpdateRequestBuilder<AdvancedRuleStructureActivations<T>, T> {
    return new UpdateRequestBuilder<AdvancedRuleStructureActivations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvancedRuleStructureActivations`.
   * @param advancedRuleStructure Key property. See {@link AdvancedRuleStructureActivations.advancedRuleStructure}.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedRuleStructureActivations`.
   */
  delete(
    advancedRuleStructure: string
  ): DeleteRequestBuilder<AdvancedRuleStructureActivations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvancedRuleStructureActivations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedRuleStructureActivations` by taking the entity as a parameter.
   */
  delete(
    entity: AdvancedRuleStructureActivations<T>
  ): DeleteRequestBuilder<AdvancedRuleStructureActivations<T>, T>;
  delete(
    advancedRuleStructureOrEntity: any
  ): DeleteRequestBuilder<AdvancedRuleStructureActivations<T>, T> {
    return new DeleteRequestBuilder<AdvancedRuleStructureActivations<T>, T>(
      this.entityApi,
      advancedRuleStructureOrEntity instanceof AdvancedRuleStructureActivations
        ? advancedRuleStructureOrEntity
        : { AdvancedRuleStructure: advancedRuleStructureOrEntity! }
    );
  }
}
