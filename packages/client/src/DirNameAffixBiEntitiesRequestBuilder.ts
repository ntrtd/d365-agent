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
import { DirNameAffixBiEntities } from './DirNameAffixBiEntities';
import { DirNameAffixType } from './DirNameAffixType';

/**
 * Request builder class for operations supported on the {@link DirNameAffixBiEntities} entity.
 */
export class DirNameAffixBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DirNameAffixBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DirNameAffixBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DirNameAffixBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DirNameAffixBiEntities<T>, T> {
    return new GetAllRequestBuilder<DirNameAffixBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DirNameAffixBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DirNameAffixBiEntities`.
   */
  create(
    entity: DirNameAffixBiEntities<T>
  ): CreateRequestBuilder<DirNameAffixBiEntities<T>, T> {
    return new CreateRequestBuilder<DirNameAffixBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DirNameAffixBiEntities` entity based on its keys.
   * @param affixType Key property. See {@link DirNameAffixBiEntities.affixType}.
   * @param affix Key property. See {@link DirNameAffixBiEntities.affix}.
   * @returns A request builder for creating requests to retrieve one `DirNameAffixBiEntities` entity based on its keys.
   */
  getByKey(
    affixType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DirNameAffixType'
    >,
    affix: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DirNameAffixBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<DirNameAffixBiEntities<T>, T>(
      this.entityApi,
      {
        AffixType: affixType,
        Affix: affix
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DirNameAffixBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DirNameAffixBiEntities`.
   */
  update(
    entity: DirNameAffixBiEntities<T>
  ): UpdateRequestBuilder<DirNameAffixBiEntities<T>, T> {
    return new UpdateRequestBuilder<DirNameAffixBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DirNameAffixBiEntities`.
   * @param affixType Key property. See {@link DirNameAffixBiEntities.affixType}.
   * @param affix Key property. See {@link DirNameAffixBiEntities.affix}.
   * @returns A request builder for creating requests that delete an entity of type `DirNameAffixBiEntities`.
   */
  delete(
    affixType: DirNameAffixType,
    affix: string
  ): DeleteRequestBuilder<DirNameAffixBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DirNameAffixBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DirNameAffixBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DirNameAffixBiEntities<T>
  ): DeleteRequestBuilder<DirNameAffixBiEntities<T>, T>;
  delete(
    affixTypeOrEntity: any,
    affix?: string
  ): DeleteRequestBuilder<DirNameAffixBiEntities<T>, T> {
    return new DeleteRequestBuilder<DirNameAffixBiEntities<T>, T>(
      this.entityApi,
      affixTypeOrEntity instanceof DirNameAffixBiEntities
        ? affixTypeOrEntity
        : {
            AffixType: affixTypeOrEntity!,
            Affix: affix!
          }
    );
  }
}
