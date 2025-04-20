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
import { VendInvoicePolicyRuleTypes } from './VendInvoicePolicyRuleTypes';

/**
 * Request builder class for operations supported on the {@link VendInvoicePolicyRuleTypes} entity.
 */
export class VendInvoicePolicyRuleTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoicePolicyRuleTypes<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoicePolicyRuleTypes` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoicePolicyRuleTypes` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoicePolicyRuleTypes<T>, T> {
    return new GetAllRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoicePolicyRuleTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoicePolicyRuleTypes`.
   */
  create(
    entity: VendInvoicePolicyRuleTypes<T>
  ): CreateRequestBuilder<VendInvoicePolicyRuleTypes<T>, T> {
    return new CreateRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoicePolicyRuleTypes` entity based on its keys.
   * @param ruleName Key property. See {@link VendInvoicePolicyRuleTypes.ruleName}.
   * @param queryName Key property. See {@link VendInvoicePolicyRuleTypes.queryName}.
   * @returns A request builder for creating requests to retrieve one `VendInvoicePolicyRuleTypes` entity based on its keys.
   */
  getByKey(
    ruleName: DeserializedType<T, 'Edm.String'>,
    queryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoicePolicyRuleTypes<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>(
      this.entityApi,
      {
        RuleName: ruleName,
        QueryName: queryName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoicePolicyRuleTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoicePolicyRuleTypes`.
   */
  update(
    entity: VendInvoicePolicyRuleTypes<T>
  ): UpdateRequestBuilder<VendInvoicePolicyRuleTypes<T>, T> {
    return new UpdateRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoicePolicyRuleTypes`.
   * @param ruleName Key property. See {@link VendInvoicePolicyRuleTypes.ruleName}.
   * @param queryName Key property. See {@link VendInvoicePolicyRuleTypes.queryName}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoicePolicyRuleTypes`.
   */
  delete(
    ruleName: string,
    queryName: string
  ): DeleteRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoicePolicyRuleTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoicePolicyRuleTypes` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoicePolicyRuleTypes<T>
  ): DeleteRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>;
  delete(
    ruleNameOrEntity: any,
    queryName?: string
  ): DeleteRequestBuilder<VendInvoicePolicyRuleTypes<T>, T> {
    return new DeleteRequestBuilder<VendInvoicePolicyRuleTypes<T>, T>(
      this.entityApi,
      ruleNameOrEntity instanceof VendInvoicePolicyRuleTypes
        ? ruleNameOrEntity
        : {
            RuleName: ruleNameOrEntity!,
            QueryName: queryName!
          }
    );
  }
}
