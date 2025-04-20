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
import { HcmFeatureManagements } from './HcmFeatureManagements';

/**
 * Request builder class for operations supported on the {@link HcmFeatureManagements} entity.
 */
export class HcmFeatureManagementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HcmFeatureManagements<T>, T> {
  /**
   * Returns a request builder for querying all `HcmFeatureManagements` entities.
   * @returns A request builder for creating requests to retrieve all `HcmFeatureManagements` entities.
   */
  getAll(): GetAllRequestBuilder<HcmFeatureManagements<T>, T> {
    return new GetAllRequestBuilder<HcmFeatureManagements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HcmFeatureManagements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HcmFeatureManagements`.
   */
  create(
    entity: HcmFeatureManagements<T>
  ): CreateRequestBuilder<HcmFeatureManagements<T>, T> {
    return new CreateRequestBuilder<HcmFeatureManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HcmFeatureManagements` entity based on its keys.
   * @param featureStateName Key property. See {@link HcmFeatureManagements.featureStateName}.
   * @returns A request builder for creating requests to retrieve one `HcmFeatureManagements` entity based on its keys.
   */
  getByKey(
    featureStateName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HcmFeatureManagements<T>, T> {
    return new GetByKeyRequestBuilder<HcmFeatureManagements<T>, T>(
      this.entityApi,
      { FeatureState_Name: featureStateName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HcmFeatureManagements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HcmFeatureManagements`.
   */
  update(
    entity: HcmFeatureManagements<T>
  ): UpdateRequestBuilder<HcmFeatureManagements<T>, T> {
    return new UpdateRequestBuilder<HcmFeatureManagements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HcmFeatureManagements`.
   * @param featureStateName Key property. See {@link HcmFeatureManagements.featureStateName}.
   * @returns A request builder for creating requests that delete an entity of type `HcmFeatureManagements`.
   */
  delete(
    featureStateName: string
  ): DeleteRequestBuilder<HcmFeatureManagements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HcmFeatureManagements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HcmFeatureManagements` by taking the entity as a parameter.
   */
  delete(
    entity: HcmFeatureManagements<T>
  ): DeleteRequestBuilder<HcmFeatureManagements<T>, T>;
  delete(
    featureStateNameOrEntity: any
  ): DeleteRequestBuilder<HcmFeatureManagements<T>, T> {
    return new DeleteRequestBuilder<HcmFeatureManagements<T>, T>(
      this.entityApi,
      featureStateNameOrEntity instanceof HcmFeatureManagements
        ? featureStateNameOrEntity
        : { FeatureState_Name: featureStateNameOrEntity! }
    );
  }
}
