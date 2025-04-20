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
import { NameAffixes } from './NameAffixes';
import { DirNameAffixType } from './DirNameAffixType';

/**
 * Request builder class for operations supported on the {@link NameAffixes} entity.
 */
export class NameAffixesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NameAffixes<T>, T> {
  /**
   * Returns a request builder for querying all `NameAffixes` entities.
   * @returns A request builder for creating requests to retrieve all `NameAffixes` entities.
   */
  getAll(): GetAllRequestBuilder<NameAffixes<T>, T> {
    return new GetAllRequestBuilder<NameAffixes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NameAffixes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NameAffixes`.
   */
  create(entity: NameAffixes<T>): CreateRequestBuilder<NameAffixes<T>, T> {
    return new CreateRequestBuilder<NameAffixes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `NameAffixes` entity based on its keys.
   * @param type Key property. See {@link NameAffixes.type}.
   * @param affix Key property. See {@link NameAffixes.affix}.
   * @returns A request builder for creating requests to retrieve one `NameAffixes` entity based on its keys.
   */
  getByKey(
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DirNameAffixType'
    >,
    affix: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NameAffixes<T>, T> {
    return new GetByKeyRequestBuilder<NameAffixes<T>, T>(this.entityApi, {
      Type: type,
      Affix: affix
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NameAffixes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NameAffixes`.
   */
  update(entity: NameAffixes<T>): UpdateRequestBuilder<NameAffixes<T>, T> {
    return new UpdateRequestBuilder<NameAffixes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NameAffixes`.
   * @param type Key property. See {@link NameAffixes.type}.
   * @param affix Key property. See {@link NameAffixes.affix}.
   * @returns A request builder for creating requests that delete an entity of type `NameAffixes`.
   */
  delete(
    type: DirNameAffixType,
    affix: string
  ): DeleteRequestBuilder<NameAffixes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NameAffixes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NameAffixes` by taking the entity as a parameter.
   */
  delete(entity: NameAffixes<T>): DeleteRequestBuilder<NameAffixes<T>, T>;
  delete(
    typeOrEntity: any,
    affix?: string
  ): DeleteRequestBuilder<NameAffixes<T>, T> {
    return new DeleteRequestBuilder<NameAffixes<T>, T>(
      this.entityApi,
      typeOrEntity instanceof NameAffixes
        ? typeOrEntity
        : {
            Type: typeOrEntity!,
            Affix: affix!
          }
    );
  }
}
