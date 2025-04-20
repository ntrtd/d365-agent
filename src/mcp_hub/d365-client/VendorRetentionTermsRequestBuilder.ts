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
import { VendorRetentionTerms } from './VendorRetentionTerms';

/**
 * Request builder class for operations supported on the {@link VendorRetentionTerms} entity.
 */
export class VendorRetentionTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRetentionTerms<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRetentionTerms` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRetentionTerms` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRetentionTerms<T>, T> {
    return new GetAllRequestBuilder<VendorRetentionTerms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorRetentionTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRetentionTerms`.
   */
  create(
    entity: VendorRetentionTerms<T>
  ): CreateRequestBuilder<VendorRetentionTerms<T>, T> {
    return new CreateRequestBuilder<VendorRetentionTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorRetentionTerms` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRetentionTerms.dataAreaId}.
   * @param ruleId Key property. See {@link VendorRetentionTerms.ruleId}.
   * @returns A request builder for creating requests to retrieve one `VendorRetentionTerms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRetentionTerms<T>, T> {
    return new GetByKeyRequestBuilder<VendorRetentionTerms<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleID: ruleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRetentionTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRetentionTerms`.
   */
  update(
    entity: VendorRetentionTerms<T>
  ): UpdateRequestBuilder<VendorRetentionTerms<T>, T> {
    return new UpdateRequestBuilder<VendorRetentionTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRetentionTerms`.
   * @param dataAreaId Key property. See {@link VendorRetentionTerms.dataAreaId}.
   * @param ruleId Key property. See {@link VendorRetentionTerms.ruleId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRetentionTerms`.
   */
  delete(
    dataAreaId: string,
    ruleId: string
  ): DeleteRequestBuilder<VendorRetentionTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRetentionTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRetentionTerms` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRetentionTerms<T>
  ): DeleteRequestBuilder<VendorRetentionTerms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleId?: string
  ): DeleteRequestBuilder<VendorRetentionTerms<T>, T> {
    return new DeleteRequestBuilder<VendorRetentionTerms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRetentionTerms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleID: ruleId!
          }
    );
  }
}
