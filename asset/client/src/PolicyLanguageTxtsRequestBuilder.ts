/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PolicyLanguageTxts } from './PolicyLanguageTxts';

/**
 * Request builder class for operations supported on the {@link PolicyLanguageTxts} entity.
 */
export class PolicyLanguageTxtsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyLanguageTxts<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyLanguageTxts` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyLanguageTxts` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyLanguageTxts<T>, T> {
    return new GetAllRequestBuilder<PolicyLanguageTxts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyLanguageTxts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyLanguageTxts`.
   */
  create(
    entity: PolicyLanguageTxts<T>
  ): CreateRequestBuilder<PolicyLanguageTxts<T>, T> {
    return new CreateRequestBuilder<PolicyLanguageTxts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PolicyLanguageTxts` entity based on its keys.
   * @param policyName Key property. See {@link PolicyLanguageTxts.policyName}.
   * @param policyRuleTypeName Key property. See {@link PolicyLanguageTxts.policyRuleTypeName}.
   * @param policyRuleValidFrom Key property. See {@link PolicyLanguageTxts.policyRuleValidFrom}.
   * @param language Key property. See {@link PolicyLanguageTxts.language}.
   * @returns A request builder for creating requests to retrieve one `PolicyLanguageTxts` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>,
    policyRuleTypeName: DeserializedType<T, 'Edm.String'>,
    policyRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PolicyLanguageTxts<T>, T> {
    return new GetByKeyRequestBuilder<PolicyLanguageTxts<T>, T>(
      this.entityApi,
      {
        Policy_Name: policyName,
        PolicyRuleType_Name: policyRuleTypeName,
        PolicyRule_ValidFrom: policyRuleValidFrom,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyLanguageTxts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyLanguageTxts`.
   */
  update(
    entity: PolicyLanguageTxts<T>
  ): UpdateRequestBuilder<PolicyLanguageTxts<T>, T> {
    return new UpdateRequestBuilder<PolicyLanguageTxts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyLanguageTxts`.
   * @param policyName Key property. See {@link PolicyLanguageTxts.policyName}.
   * @param policyRuleTypeName Key property. See {@link PolicyLanguageTxts.policyRuleTypeName}.
   * @param policyRuleValidFrom Key property. See {@link PolicyLanguageTxts.policyRuleValidFrom}.
   * @param language Key property. See {@link PolicyLanguageTxts.language}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyLanguageTxts`.
   */
  delete(
    policyName: string,
    policyRuleTypeName: string,
    policyRuleValidFrom: Moment,
    language: string
  ): DeleteRequestBuilder<PolicyLanguageTxts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyLanguageTxts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyLanguageTxts` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyLanguageTxts<T>
  ): DeleteRequestBuilder<PolicyLanguageTxts<T>, T>;
  delete(
    policyNameOrEntity: any,
    policyRuleTypeName?: string,
    policyRuleValidFrom?: Moment,
    language?: string
  ): DeleteRequestBuilder<PolicyLanguageTxts<T>, T> {
    return new DeleteRequestBuilder<PolicyLanguageTxts<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof PolicyLanguageTxts
        ? policyNameOrEntity
        : {
            Policy_Name: policyNameOrEntity!,
            PolicyRuleType_Name: policyRuleTypeName!,
            PolicyRule_ValidFrom: policyRuleValidFrom!,
            Language: language!
          }
    );
  }
}
