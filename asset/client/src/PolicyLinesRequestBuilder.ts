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
import { PolicyLines } from './PolicyLines';

/**
 * Request builder class for operations supported on the {@link PolicyLines} entity.
 */
export class PolicyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyLines<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyLines` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyLines` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyLines<T>, T> {
    return new GetAllRequestBuilder<PolicyLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyLines`.
   */
  create(entity: PolicyLines<T>): CreateRequestBuilder<PolicyLines<T>, T> {
    return new CreateRequestBuilder<PolicyLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PolicyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PolicyLines.dataAreaId}.
   * @param policyName Key property. See {@link PolicyLines.policyName}.
   * @param mdIdentifier Key property. See {@link PolicyLines.mdIdentifier}.
   * @returns A request builder for creating requests to retrieve one `PolicyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>,
    mdIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PolicyLines<T>, T> {
    return new GetByKeyRequestBuilder<PolicyLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PolicyName: policyName,
      MDIdentifier: mdIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyLines`.
   */
  update(entity: PolicyLines<T>): UpdateRequestBuilder<PolicyLines<T>, T> {
    return new UpdateRequestBuilder<PolicyLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyLines`.
   * @param dataAreaId Key property. See {@link PolicyLines.dataAreaId}.
   * @param policyName Key property. See {@link PolicyLines.policyName}.
   * @param mdIdentifier Key property. See {@link PolicyLines.mdIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyLines`.
   */
  delete(
    dataAreaId: string,
    policyName: string,
    mdIdentifier: string
  ): DeleteRequestBuilder<PolicyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyLines` by taking the entity as a parameter.
   */
  delete(entity: PolicyLines<T>): DeleteRequestBuilder<PolicyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string,
    mdIdentifier?: string
  ): DeleteRequestBuilder<PolicyLines<T>, T> {
    return new DeleteRequestBuilder<PolicyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PolicyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!,
            MDIdentifier: mdIdentifier!
          }
    );
  }
}
