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
import { PsaIndirectComponentGroupEntities } from './PsaIndirectComponentGroupEntities';

/**
 * Request builder class for operations supported on the {@link PsaIndirectComponentGroupEntities} entity.
 */
export class PsaIndirectComponentGroupEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PsaIndirectComponentGroupEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PsaIndirectComponentGroupEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PsaIndirectComponentGroupEntities` entities.
   */
  getAll(): GetAllRequestBuilder<PsaIndirectComponentGroupEntities<T>, T> {
    return new GetAllRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PsaIndirectComponentGroupEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PsaIndirectComponentGroupEntities`.
   */
  create(
    entity: PsaIndirectComponentGroupEntities<T>
  ): CreateRequestBuilder<PsaIndirectComponentGroupEntities<T>, T> {
    return new CreateRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PsaIndirectComponentGroupEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PsaIndirectComponentGroupEntities.dataAreaId}.
   * @param indirectCostComponentGroup Key property. See {@link PsaIndirectComponentGroupEntities.indirectCostComponentGroup}.
   * @returns A request builder for creating requests to retrieve one `PsaIndirectComponentGroupEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    indirectCostComponentGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PsaIndirectComponentGroupEntities<T>, T> {
    return new GetByKeyRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        IndirectCostComponentGroup: indirectCostComponentGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PsaIndirectComponentGroupEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PsaIndirectComponentGroupEntities`.
   */
  update(
    entity: PsaIndirectComponentGroupEntities<T>
  ): UpdateRequestBuilder<PsaIndirectComponentGroupEntities<T>, T> {
    return new UpdateRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PsaIndirectComponentGroupEntities`.
   * @param dataAreaId Key property. See {@link PsaIndirectComponentGroupEntities.dataAreaId}.
   * @param indirectCostComponentGroup Key property. See {@link PsaIndirectComponentGroupEntities.indirectCostComponentGroup}.
   * @returns A request builder for creating requests that delete an entity of type `PsaIndirectComponentGroupEntities`.
   */
  delete(
    dataAreaId: string,
    indirectCostComponentGroup: string
  ): DeleteRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PsaIndirectComponentGroupEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PsaIndirectComponentGroupEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PsaIndirectComponentGroupEntities<T>
  ): DeleteRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    indirectCostComponentGroup?: string
  ): DeleteRequestBuilder<PsaIndirectComponentGroupEntities<T>, T> {
    return new DeleteRequestBuilder<PsaIndirectComponentGroupEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PsaIndirectComponentGroupEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IndirectCostComponentGroup: indirectCostComponentGroup!
          }
    );
  }
}
