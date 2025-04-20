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
import { CatchWeightItemHandlingPoliciesV2 } from './CatchWeightItemHandlingPoliciesV2';

/**
 * Request builder class for operations supported on the {@link CatchWeightItemHandlingPoliciesV2} entity.
 */
export class CatchWeightItemHandlingPoliciesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CatchWeightItemHandlingPoliciesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CatchWeightItemHandlingPoliciesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T> {
    return new GetAllRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CatchWeightItemHandlingPoliciesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CatchWeightItemHandlingPoliciesV2`.
   */
  create(
    entity: CatchWeightItemHandlingPoliciesV2<T>
  ): CreateRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T> {
    return new CreateRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CatchWeightItemHandlingPoliciesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CatchWeightItemHandlingPoliciesV2.dataAreaId}.
   * @param policyName Key property. See {@link CatchWeightItemHandlingPoliciesV2.policyName}.
   * @returns A request builder for creating requests to retrieve one `CatchWeightItemHandlingPoliciesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T> {
    return new GetByKeyRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyName: policyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CatchWeightItemHandlingPoliciesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CatchWeightItemHandlingPoliciesV2`.
   */
  update(
    entity: CatchWeightItemHandlingPoliciesV2<T>
  ): UpdateRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T> {
    return new UpdateRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CatchWeightItemHandlingPoliciesV2`.
   * @param dataAreaId Key property. See {@link CatchWeightItemHandlingPoliciesV2.dataAreaId}.
   * @param policyName Key property. See {@link CatchWeightItemHandlingPoliciesV2.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `CatchWeightItemHandlingPoliciesV2`.
   */
  delete(
    dataAreaId: string,
    policyName: string
  ): DeleteRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CatchWeightItemHandlingPoliciesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CatchWeightItemHandlingPoliciesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CatchWeightItemHandlingPoliciesV2<T>
  ): DeleteRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string
  ): DeleteRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T> {
    return new DeleteRequestBuilder<CatchWeightItemHandlingPoliciesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CatchWeightItemHandlingPoliciesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!
          }
    );
  }
}
