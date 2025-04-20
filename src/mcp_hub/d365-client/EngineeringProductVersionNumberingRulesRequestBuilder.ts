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
import { EngineeringProductVersionNumberingRules } from './EngineeringProductVersionNumberingRules';

/**
 * Request builder class for operations supported on the {@link EngineeringProductVersionNumberingRules} entity.
 */
export class EngineeringProductVersionNumberingRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductVersionNumberingRules<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductVersionNumberingRules` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductVersionNumberingRules` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringProductVersionNumberingRules<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringProductVersionNumberingRules<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringProductVersionNumberingRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductVersionNumberingRules`.
   */
  create(
    entity: EngineeringProductVersionNumberingRules<T>
  ): CreateRequestBuilder<EngineeringProductVersionNumberingRules<T>, T> {
    return new CreateRequestBuilder<
      EngineeringProductVersionNumberingRules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductVersionNumberingRules` entity based on its keys.
   * @param ruleName Key property. See {@link EngineeringProductVersionNumberingRules.ruleName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductVersionNumberingRules` entity based on its keys.
   */
  getByKey(
    ruleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringProductVersionNumberingRules<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringProductVersionNumberingRules<T>,
      T
    >(this.entityApi, { RuleName: ruleName });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductVersionNumberingRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductVersionNumberingRules`.
   */
  update(
    entity: EngineeringProductVersionNumberingRules<T>
  ): UpdateRequestBuilder<EngineeringProductVersionNumberingRules<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringProductVersionNumberingRules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductVersionNumberingRules`.
   * @param ruleName Key property. See {@link EngineeringProductVersionNumberingRules.ruleName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductVersionNumberingRules`.
   */
  delete(
    ruleName: string
  ): DeleteRequestBuilder<EngineeringProductVersionNumberingRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductVersionNumberingRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductVersionNumberingRules` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductVersionNumberingRules<T>
  ): DeleteRequestBuilder<EngineeringProductVersionNumberingRules<T>, T>;
  delete(
    ruleNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringProductVersionNumberingRules<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringProductVersionNumberingRules<T>,
      T
    >(
      this.entityApi,
      ruleNameOrEntity instanceof EngineeringProductVersionNumberingRules
        ? ruleNameOrEntity
        : { RuleName: ruleNameOrEntity! }
    );
  }
}
