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
import { HazardousTunnels } from './HazardousTunnels';

/**
 * Request builder class for operations supported on the {@link HazardousTunnels} entity.
 */
export class HazardousTunnelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousTunnels<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousTunnels` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousTunnels` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousTunnels<T>, T> {
    return new GetAllRequestBuilder<HazardousTunnels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `HazardousTunnels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousTunnels`.
   */
  create(
    entity: HazardousTunnels<T>
  ): CreateRequestBuilder<HazardousTunnels<T>, T> {
    return new CreateRequestBuilder<HazardousTunnels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousTunnels` entity based on its keys.
   * @param tunnelCode Key property. See {@link HazardousTunnels.tunnelCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousTunnels` entity based on its keys.
   */
  getByKey(
    tunnelCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousTunnels<T>, T> {
    return new GetByKeyRequestBuilder<HazardousTunnels<T>, T>(this.entityApi, {
      TunnelCode: tunnelCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousTunnels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousTunnels`.
   */
  update(
    entity: HazardousTunnels<T>
  ): UpdateRequestBuilder<HazardousTunnels<T>, T> {
    return new UpdateRequestBuilder<HazardousTunnels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousTunnels`.
   * @param tunnelCode Key property. See {@link HazardousTunnels.tunnelCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousTunnels`.
   */
  delete(tunnelCode: string): DeleteRequestBuilder<HazardousTunnels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousTunnels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousTunnels` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousTunnels<T>
  ): DeleteRequestBuilder<HazardousTunnels<T>, T>;
  delete(
    tunnelCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousTunnels<T>, T> {
    return new DeleteRequestBuilder<HazardousTunnels<T>, T>(
      this.entityApi,
      tunnelCodeOrEntity instanceof HazardousTunnels
        ? tunnelCodeOrEntity
        : { TunnelCode: tunnelCodeOrEntity! }
    );
  }
}
