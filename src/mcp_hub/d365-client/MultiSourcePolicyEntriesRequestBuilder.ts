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
import { MultiSourcePolicyEntries } from './MultiSourcePolicyEntries';

/**
 * Request builder class for operations supported on the {@link MultiSourcePolicyEntries} entity.
 */
export class MultiSourcePolicyEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultiSourcePolicyEntries<T>, T> {
  /**
   * Returns a request builder for querying all `MultiSourcePolicyEntries` entities.
   * @returns A request builder for creating requests to retrieve all `MultiSourcePolicyEntries` entities.
   */
  getAll(): GetAllRequestBuilder<MultiSourcePolicyEntries<T>, T> {
    return new GetAllRequestBuilder<MultiSourcePolicyEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultiSourcePolicyEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultiSourcePolicyEntries`.
   */
  create(
    entity: MultiSourcePolicyEntries<T>
  ): CreateRequestBuilder<MultiSourcePolicyEntries<T>, T> {
    return new CreateRequestBuilder<MultiSourcePolicyEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultiSourcePolicyEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultiSourcePolicyEntries.dataAreaId}.
   * @param policyName Key property. See {@link MultiSourcePolicyEntries.policyName}.
   * @param vendorAccountNumber Key property. See {@link MultiSourcePolicyEntries.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `MultiSourcePolicyEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MultiSourcePolicyEntries<T>, T> {
    return new GetByKeyRequestBuilder<MultiSourcePolicyEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyName: policyName,
        VendorAccountNumber: vendorAccountNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultiSourcePolicyEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultiSourcePolicyEntries`.
   */
  update(
    entity: MultiSourcePolicyEntries<T>
  ): UpdateRequestBuilder<MultiSourcePolicyEntries<T>, T> {
    return new UpdateRequestBuilder<MultiSourcePolicyEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultiSourcePolicyEntries`.
   * @param dataAreaId Key property. See {@link MultiSourcePolicyEntries.dataAreaId}.
   * @param policyName Key property. See {@link MultiSourcePolicyEntries.policyName}.
   * @param vendorAccountNumber Key property. See {@link MultiSourcePolicyEntries.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourcePolicyEntries`.
   */
  delete(
    dataAreaId: string,
    policyName: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<MultiSourcePolicyEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultiSourcePolicyEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourcePolicyEntries` by taking the entity as a parameter.
   */
  delete(
    entity: MultiSourcePolicyEntries<T>
  ): DeleteRequestBuilder<MultiSourcePolicyEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<MultiSourcePolicyEntries<T>, T> {
    return new DeleteRequestBuilder<MultiSourcePolicyEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultiSourcePolicyEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
