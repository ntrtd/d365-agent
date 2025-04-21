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
import { CompensationEligibilityRules } from './CompensationEligibilityRules';

/**
 * Request builder class for operations supported on the {@link CompensationEligibilityRules} entity.
 */
export class CompensationEligibilityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationEligibilityRules<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationEligibilityRules` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationEligibilityRules` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationEligibilityRules<T>, T> {
    return new GetAllRequestBuilder<CompensationEligibilityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationEligibilityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationEligibilityRules`.
   */
  create(
    entity: CompensationEligibilityRules<T>
  ): CreateRequestBuilder<CompensationEligibilityRules<T>, T> {
    return new CreateRequestBuilder<CompensationEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationEligibilityRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationEligibilityRules.dataAreaId}.
   * @param eligibility Key property. See {@link CompensationEligibilityRules.eligibility}.
   * @returns A request builder for creating requests to retrieve one `CompensationEligibilityRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    eligibility: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationEligibilityRules<T>, T> {
    return new GetByKeyRequestBuilder<CompensationEligibilityRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Eligibility: eligibility
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationEligibilityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationEligibilityRules`.
   */
  update(
    entity: CompensationEligibilityRules<T>
  ): UpdateRequestBuilder<CompensationEligibilityRules<T>, T> {
    return new UpdateRequestBuilder<CompensationEligibilityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationEligibilityRules`.
   * @param dataAreaId Key property. See {@link CompensationEligibilityRules.dataAreaId}.
   * @param eligibility Key property. See {@link CompensationEligibilityRules.eligibility}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationEligibilityRules`.
   */
  delete(
    dataAreaId: string,
    eligibility: string
  ): DeleteRequestBuilder<CompensationEligibilityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationEligibilityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationEligibilityRules` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationEligibilityRules<T>
  ): DeleteRequestBuilder<CompensationEligibilityRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    eligibility?: string
  ): DeleteRequestBuilder<CompensationEligibilityRules<T>, T> {
    return new DeleteRequestBuilder<CompensationEligibilityRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationEligibilityRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Eligibility: eligibility!
          }
    );
  }
}
