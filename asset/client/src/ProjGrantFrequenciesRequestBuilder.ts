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
import { ProjGrantFrequencies } from './ProjGrantFrequencies';
import { ProjGrantFrequencyType } from './ProjGrantFrequencyType';

/**
 * Request builder class for operations supported on the {@link ProjGrantFrequencies} entity.
 */
export class ProjGrantFrequenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrantFrequencies<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrantFrequencies` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrantFrequencies` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrantFrequencies<T>, T> {
    return new GetAllRequestBuilder<ProjGrantFrequencies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjGrantFrequencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrantFrequencies`.
   */
  create(
    entity: ProjGrantFrequencies<T>
  ): CreateRequestBuilder<ProjGrantFrequencies<T>, T> {
    return new CreateRequestBuilder<ProjGrantFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjGrantFrequencies` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrantFrequencies.dataAreaId}.
   * @param projGrantGrantId Key property. See {@link ProjGrantFrequencies.projGrantGrantId}.
   * @param frequency Key property. See {@link ProjGrantFrequencies.frequency}.
   * @returns A request builder for creating requests to retrieve one `ProjGrantFrequencies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projGrantGrantId: DeserializedType<T, 'Edm.String'>,
    frequency: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjGrantFrequencyType'
    >
  ): GetByKeyRequestBuilder<ProjGrantFrequencies<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrantFrequencies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjGrant_GrantId: projGrantGrantId,
        Frequency: frequency
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrantFrequencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrantFrequencies`.
   */
  update(
    entity: ProjGrantFrequencies<T>
  ): UpdateRequestBuilder<ProjGrantFrequencies<T>, T> {
    return new UpdateRequestBuilder<ProjGrantFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrantFrequencies`.
   * @param dataAreaId Key property. See {@link ProjGrantFrequencies.dataAreaId}.
   * @param projGrantGrantId Key property. See {@link ProjGrantFrequencies.projGrantGrantId}.
   * @param frequency Key property. See {@link ProjGrantFrequencies.frequency}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantFrequencies`.
   */
  delete(
    dataAreaId: string,
    projGrantGrantId: string,
    frequency: ProjGrantFrequencyType
  ): DeleteRequestBuilder<ProjGrantFrequencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrantFrequencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantFrequencies` by taking the entity as a parameter.
   */
  delete(
    entity: ProjGrantFrequencies<T>
  ): DeleteRequestBuilder<ProjGrantFrequencies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projGrantGrantId?: string,
    frequency?: ProjGrantFrequencyType
  ): DeleteRequestBuilder<ProjGrantFrequencies<T>, T> {
    return new DeleteRequestBuilder<ProjGrantFrequencies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrantFrequencies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjGrant_GrantId: projGrantGrantId!,
            Frequency: frequency!
          }
    );
  }
}
