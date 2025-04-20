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
import { EngineeringProductVersionNumberingRuleListMembers } from './EngineeringProductVersionNumberingRuleListMembers';

/**
 * Request builder class for operations supported on the {@link EngineeringProductVersionNumberingRuleListMembers} entity.
 */
export class EngineeringProductVersionNumberingRuleListMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringProductVersionNumberingRuleListMembers<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringProductVersionNumberingRuleListMembers` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductVersionNumberingRuleListMembers` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringProductVersionNumberingRuleListMembers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringProductVersionNumberingRuleListMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductVersionNumberingRuleListMembers`.
   */
  create(
    entity: EngineeringProductVersionNumberingRuleListMembers<T>
  ): CreateRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringProductVersionNumberingRuleListMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductVersionNumberingRuleListMembers` entity based on its keys.
   * @param versionNumberingRuleName Key property. See {@link EngineeringProductVersionNumberingRuleListMembers.versionNumberingRuleName}.
   * @param productVersionName Key property. See {@link EngineeringProductVersionNumberingRuleListMembers.productVersionName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductVersionNumberingRuleListMembers` entity based on its keys.
   */
  getByKey(
    versionNumberingRuleName: DeserializedType<T, 'Edm.String'>,
    productVersionName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringProductVersionNumberingRuleListMembers<T>,
      T
    >(this.entityApi, {
      VersionNumberingRuleName: versionNumberingRuleName,
      ProductVersionName: productVersionName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductVersionNumberingRuleListMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductVersionNumberingRuleListMembers`.
   */
  update(
    entity: EngineeringProductVersionNumberingRuleListMembers<T>
  ): UpdateRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringProductVersionNumberingRuleListMembers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductVersionNumberingRuleListMembers`.
   * @param versionNumberingRuleName Key property. See {@link EngineeringProductVersionNumberingRuleListMembers.versionNumberingRuleName}.
   * @param productVersionName Key property. See {@link EngineeringProductVersionNumberingRuleListMembers.productVersionName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductVersionNumberingRuleListMembers`.
   */
  delete(
    versionNumberingRuleName: string,
    productVersionName: string
  ): DeleteRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductVersionNumberingRuleListMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductVersionNumberingRuleListMembers` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductVersionNumberingRuleListMembers<T>
  ): DeleteRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  >;
  delete(
    versionNumberingRuleNameOrEntity: any,
    productVersionName?: string
  ): DeleteRequestBuilder<
    EngineeringProductVersionNumberingRuleListMembers<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringProductVersionNumberingRuleListMembers<T>,
      T
    >(
      this.entityApi,
      versionNumberingRuleNameOrEntity instanceof
      EngineeringProductVersionNumberingRuleListMembers
        ? versionNumberingRuleNameOrEntity
        : {
            VersionNumberingRuleName: versionNumberingRuleNameOrEntity!,
            ProductVersionName: productVersionName!
          }
    );
  }
}
