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
import { PolicyTables } from './PolicyTables';

/**
 * Request builder class for operations supported on the {@link PolicyTables} entity.
 */
export class PolicyTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyTables<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyTables` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyTables` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyTables<T>, T> {
    return new GetAllRequestBuilder<PolicyTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyTables`.
   */
  create(entity: PolicyTables<T>): CreateRequestBuilder<PolicyTables<T>, T> {
    return new CreateRequestBuilder<PolicyTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PolicyTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link PolicyTables.dataAreaId}.
   * @param policyName Key property. See {@link PolicyTables.policyName}.
   * @returns A request builder for creating requests to retrieve one `PolicyTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PolicyTables<T>, T> {
    return new GetByKeyRequestBuilder<PolicyTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PolicyName: policyName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyTables`.
   */
  update(entity: PolicyTables<T>): UpdateRequestBuilder<PolicyTables<T>, T> {
    return new UpdateRequestBuilder<PolicyTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyTables`.
   * @param dataAreaId Key property. See {@link PolicyTables.dataAreaId}.
   * @param policyName Key property. See {@link PolicyTables.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyTables`.
   */
  delete(
    dataAreaId: string,
    policyName: string
  ): DeleteRequestBuilder<PolicyTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyTables` by taking the entity as a parameter.
   */
  delete(entity: PolicyTables<T>): DeleteRequestBuilder<PolicyTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string
  ): DeleteRequestBuilder<PolicyTables<T>, T> {
    return new DeleteRequestBuilder<PolicyTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PolicyTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!
          }
    );
  }
}
