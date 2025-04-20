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
import { ReturnPolicyChannels } from './ReturnPolicyChannels';

/**
 * Request builder class for operations supported on the {@link ReturnPolicyChannels} entity.
 */
export class ReturnPolicyChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnPolicyChannels<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnPolicyChannels` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnPolicyChannels` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnPolicyChannels<T>, T> {
    return new GetAllRequestBuilder<ReturnPolicyChannels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnPolicyChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnPolicyChannels`.
   */
  create(
    entity: ReturnPolicyChannels<T>
  ): CreateRequestBuilder<ReturnPolicyChannels<T>, T> {
    return new CreateRequestBuilder<ReturnPolicyChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnPolicyChannels` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnPolicyChannels.dataAreaId}.
   * @param policyName Key property. See {@link ReturnPolicyChannels.policyName}.
   * @returns A request builder for creating requests to retrieve one `ReturnPolicyChannels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnPolicyChannels<T>, T> {
    return new GetByKeyRequestBuilder<ReturnPolicyChannels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyName: policyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnPolicyChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnPolicyChannels`.
   */
  update(
    entity: ReturnPolicyChannels<T>
  ): UpdateRequestBuilder<ReturnPolicyChannels<T>, T> {
    return new UpdateRequestBuilder<ReturnPolicyChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnPolicyChannels`.
   * @param dataAreaId Key property. See {@link ReturnPolicyChannels.dataAreaId}.
   * @param policyName Key property. See {@link ReturnPolicyChannels.policyName}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnPolicyChannels`.
   */
  delete(
    dataAreaId: string,
    policyName: string
  ): DeleteRequestBuilder<ReturnPolicyChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnPolicyChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnPolicyChannels` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnPolicyChannels<T>
  ): DeleteRequestBuilder<ReturnPolicyChannels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyName?: string
  ): DeleteRequestBuilder<ReturnPolicyChannels<T>, T> {
    return new DeleteRequestBuilder<ReturnPolicyChannels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnPolicyChannels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyName: policyName!
          }
    );
  }
}
