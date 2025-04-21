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
import { HazardousMaterialTransportCategories } from './HazardousMaterialTransportCategories';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialTransportCategories} entity.
 */
export class HazardousMaterialTransportCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialTransportCategories<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialTransportCategories` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialTransportCategories` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialTransportCategories<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialTransportCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialTransportCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialTransportCategories`.
   */
  create(
    entity: HazardousMaterialTransportCategories<T>
  ): CreateRequestBuilder<HazardousMaterialTransportCategories<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialTransportCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialTransportCategories` entity based on its keys.
   * @param transportCategoryCode Key property. See {@link HazardousMaterialTransportCategories.transportCategoryCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialTransportCategories` entity based on its keys.
   */
  getByKey(
    transportCategoryCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialTransportCategories<T>, T> {
    return new GetByKeyRequestBuilder<
      HazardousMaterialTransportCategories<T>,
      T
    >(this.entityApi, { TransportCategoryCode: transportCategoryCode });
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialTransportCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialTransportCategories`.
   */
  update(
    entity: HazardousMaterialTransportCategories<T>
  ): UpdateRequestBuilder<HazardousMaterialTransportCategories<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialTransportCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialTransportCategories`.
   * @param transportCategoryCode Key property. See {@link HazardousMaterialTransportCategories.transportCategoryCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialTransportCategories`.
   */
  delete(
    transportCategoryCode: string
  ): DeleteRequestBuilder<HazardousMaterialTransportCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialTransportCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialTransportCategories` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialTransportCategories<T>
  ): DeleteRequestBuilder<HazardousMaterialTransportCategories<T>, T>;
  delete(
    transportCategoryCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialTransportCategories<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialTransportCategories<T>, T>(
      this.entityApi,
      transportCategoryCodeOrEntity instanceof
      HazardousMaterialTransportCategories
        ? transportCategoryCodeOrEntity
        : { TransportCategoryCode: transportCategoryCodeOrEntity! }
    );
  }
}
