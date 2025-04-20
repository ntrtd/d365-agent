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
import { ChannelPlannerConfigurations } from './ChannelPlannerConfigurations';

/**
 * Request builder class for operations supported on the {@link ChannelPlannerConfigurations} entity.
 */
export class ChannelPlannerConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChannelPlannerConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `ChannelPlannerConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `ChannelPlannerConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<ChannelPlannerConfigurations<T>, T> {
    return new GetAllRequestBuilder<ChannelPlannerConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ChannelPlannerConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChannelPlannerConfigurations`.
   */
  create(
    entity: ChannelPlannerConfigurations<T>
  ): CreateRequestBuilder<ChannelPlannerConfigurations<T>, T> {
    return new CreateRequestBuilder<ChannelPlannerConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ChannelPlannerConfigurations` entity based on its keys.
   * @param planId Key property. See {@link ChannelPlannerConfigurations.planId}.
   * @returns A request builder for creating requests to retrieve one `ChannelPlannerConfigurations` entity based on its keys.
   */
  getByKey(
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ChannelPlannerConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<ChannelPlannerConfigurations<T>, T>(
      this.entityApi,
      { PlanId: planId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ChannelPlannerConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChannelPlannerConfigurations`.
   */
  update(
    entity: ChannelPlannerConfigurations<T>
  ): UpdateRequestBuilder<ChannelPlannerConfigurations<T>, T> {
    return new UpdateRequestBuilder<ChannelPlannerConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChannelPlannerConfigurations`.
   * @param planId Key property. See {@link ChannelPlannerConfigurations.planId}.
   * @returns A request builder for creating requests that delete an entity of type `ChannelPlannerConfigurations`.
   */
  delete(
    planId: string
  ): DeleteRequestBuilder<ChannelPlannerConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChannelPlannerConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChannelPlannerConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: ChannelPlannerConfigurations<T>
  ): DeleteRequestBuilder<ChannelPlannerConfigurations<T>, T>;
  delete(
    planIdOrEntity: any
  ): DeleteRequestBuilder<ChannelPlannerConfigurations<T>, T> {
    return new DeleteRequestBuilder<ChannelPlannerConfigurations<T>, T>(
      this.entityApi,
      planIdOrEntity instanceof ChannelPlannerConfigurations
        ? planIdOrEntity
        : { PlanId: planIdOrEntity! }
    );
  }
}
