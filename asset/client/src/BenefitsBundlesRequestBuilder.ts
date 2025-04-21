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
import { BenefitsBundles } from './BenefitsBundles';

/**
 * Request builder class for operations supported on the {@link BenefitsBundles} entity.
 */
export class BenefitsBundlesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsBundles<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsBundles` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsBundles` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsBundles<T>, T> {
    return new GetAllRequestBuilder<BenefitsBundles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsBundles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsBundles`.
   */
  create(
    entity: BenefitsBundles<T>
  ): CreateRequestBuilder<BenefitsBundles<T>, T> {
    return new CreateRequestBuilder<BenefitsBundles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsBundles` entity based on its keys.
   * @param bundleId Key property. See {@link BenefitsBundles.bundleId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsBundles` entity based on its keys.
   */
  getByKey(
    bundleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsBundles<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsBundles<T>, T>(this.entityApi, {
      BundleId: bundleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsBundles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsBundles`.
   */
  update(
    entity: BenefitsBundles<T>
  ): UpdateRequestBuilder<BenefitsBundles<T>, T> {
    return new UpdateRequestBuilder<BenefitsBundles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsBundles`.
   * @param bundleId Key property. See {@link BenefitsBundles.bundleId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsBundles`.
   */
  delete(bundleId: string): DeleteRequestBuilder<BenefitsBundles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsBundles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsBundles` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsBundles<T>
  ): DeleteRequestBuilder<BenefitsBundles<T>, T>;
  delete(bundleIdOrEntity: any): DeleteRequestBuilder<BenefitsBundles<T>, T> {
    return new DeleteRequestBuilder<BenefitsBundles<T>, T>(
      this.entityApi,
      bundleIdOrEntity instanceof BenefitsBundles
        ? bundleIdOrEntity
        : { BundleId: bundleIdOrEntity! }
    );
  }
}
