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
import { ProjGrantTypeFrequencies } from './ProjGrantTypeFrequencies';
import { ProjGrantFrequencyType } from './ProjGrantFrequencyType';

/**
 * Request builder class for operations supported on the {@link ProjGrantTypeFrequencies} entity.
 */
export class ProjGrantTypeFrequenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrantTypeFrequencies<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrantTypeFrequencies` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrantTypeFrequencies` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrantTypeFrequencies<T>, T> {
    return new GetAllRequestBuilder<ProjGrantTypeFrequencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjGrantTypeFrequencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrantTypeFrequencies`.
   */
  create(
    entity: ProjGrantTypeFrequencies<T>
  ): CreateRequestBuilder<ProjGrantTypeFrequencies<T>, T> {
    return new CreateRequestBuilder<ProjGrantTypeFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjGrantTypeFrequencies` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrantTypeFrequencies.dataAreaId}.
   * @param projGrantTypeGrantType Key property. See {@link ProjGrantTypeFrequencies.projGrantTypeGrantType}.
   * @param frequency Key property. See {@link ProjGrantTypeFrequencies.frequency}.
   * @returns A request builder for creating requests to retrieve one `ProjGrantTypeFrequencies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projGrantTypeGrantType: DeserializedType<T, 'Edm.String'>,
    frequency: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjGrantFrequencyType'
    >
  ): GetByKeyRequestBuilder<ProjGrantTypeFrequencies<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrantTypeFrequencies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjGrantType_GrantType: projGrantTypeGrantType,
        Frequency: frequency
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrantTypeFrequencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrantTypeFrequencies`.
   */
  update(
    entity: ProjGrantTypeFrequencies<T>
  ): UpdateRequestBuilder<ProjGrantTypeFrequencies<T>, T> {
    return new UpdateRequestBuilder<ProjGrantTypeFrequencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrantTypeFrequencies`.
   * @param dataAreaId Key property. See {@link ProjGrantTypeFrequencies.dataAreaId}.
   * @param projGrantTypeGrantType Key property. See {@link ProjGrantTypeFrequencies.projGrantTypeGrantType}.
   * @param frequency Key property. See {@link ProjGrantTypeFrequencies.frequency}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantTypeFrequencies`.
   */
  delete(
    dataAreaId: string,
    projGrantTypeGrantType: string,
    frequency: ProjGrantFrequencyType
  ): DeleteRequestBuilder<ProjGrantTypeFrequencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrantTypeFrequencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantTypeFrequencies` by taking the entity as a parameter.
   */
  delete(
    entity: ProjGrantTypeFrequencies<T>
  ): DeleteRequestBuilder<ProjGrantTypeFrequencies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projGrantTypeGrantType?: string,
    frequency?: ProjGrantFrequencyType
  ): DeleteRequestBuilder<ProjGrantTypeFrequencies<T>, T> {
    return new DeleteRequestBuilder<ProjGrantTypeFrequencies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrantTypeFrequencies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjGrantType_GrantType: projGrantTypeGrantType!,
            Frequency: frequency!
          }
    );
  }
}
