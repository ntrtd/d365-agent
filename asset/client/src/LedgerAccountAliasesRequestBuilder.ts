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
import { LedgerAccountAliases } from './LedgerAccountAliases';
import { DimensionAliasType } from './DimensionAliasType';

/**
 * Request builder class for operations supported on the {@link LedgerAccountAliases} entity.
 */
export class LedgerAccountAliasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerAccountAliases<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerAccountAliases` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerAccountAliases` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerAccountAliases<T>, T> {
    return new GetAllRequestBuilder<LedgerAccountAliases<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerAccountAliases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerAccountAliases`.
   */
  create(
    entity: LedgerAccountAliases<T>
  ): CreateRequestBuilder<LedgerAccountAliases<T>, T> {
    return new CreateRequestBuilder<LedgerAccountAliases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerAccountAliases` entity based on its keys.
   * @param name Key property. See {@link LedgerAccountAliases.name}.
   * @param aliasType Key property. See {@link LedgerAccountAliases.aliasType}.
   * @param userInfo Key property. See {@link LedgerAccountAliases.userInfo}.
   * @returns A request builder for creating requests to retrieve one `LedgerAccountAliases` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    aliasType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionAliasType'
    >,
    userInfo: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerAccountAliases<T>, T> {
    return new GetByKeyRequestBuilder<LedgerAccountAliases<T>, T>(
      this.entityApi,
      {
        Name: name,
        AliasType: aliasType,
        UserInfo: userInfo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerAccountAliases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerAccountAliases`.
   */
  update(
    entity: LedgerAccountAliases<T>
  ): UpdateRequestBuilder<LedgerAccountAliases<T>, T> {
    return new UpdateRequestBuilder<LedgerAccountAliases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerAccountAliases`.
   * @param name Key property. See {@link LedgerAccountAliases.name}.
   * @param aliasType Key property. See {@link LedgerAccountAliases.aliasType}.
   * @param userInfo Key property. See {@link LedgerAccountAliases.userInfo}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAccountAliases`.
   */
  delete(
    name: string,
    aliasType: DimensionAliasType,
    userInfo: string
  ): DeleteRequestBuilder<LedgerAccountAliases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerAccountAliases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAccountAliases` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerAccountAliases<T>
  ): DeleteRequestBuilder<LedgerAccountAliases<T>, T>;
  delete(
    nameOrEntity: any,
    aliasType?: DimensionAliasType,
    userInfo?: string
  ): DeleteRequestBuilder<LedgerAccountAliases<T>, T> {
    return new DeleteRequestBuilder<LedgerAccountAliases<T>, T>(
      this.entityApi,
      nameOrEntity instanceof LedgerAccountAliases
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            AliasType: aliasType!,
            UserInfo: userInfo!
          }
    );
  }
}
