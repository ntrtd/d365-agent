/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailTmpChannelProductMedias } from './RetailTmpChannelProductMedias';

/**
 * Request builder class for operations supported on the {@link RetailTmpChannelProductMedias} entity.
 */
export class RetailTmpChannelProductMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTmpChannelProductMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTmpChannelProductMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTmpChannelProductMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTmpChannelProductMedias<T>, T> {
    return new GetAllRequestBuilder<RetailTmpChannelProductMedias<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTmpChannelProductMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTmpChannelProductMedias`.
   */
  create(
    entity: RetailTmpChannelProductMedias<T>
  ): CreateRequestBuilder<RetailTmpChannelProductMedias<T>, T> {
    return new CreateRequestBuilder<RetailTmpChannelProductMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTmpChannelProductMedias` entity based on its keys.
   * @param internalOrganization Key property. See {@link RetailTmpChannelProductMedias.internalOrganization}.
   * @param fileName Key property. See {@link RetailTmpChannelProductMedias.fileName}.
   * @returns A request builder for creating requests to retrieve one `RetailTmpChannelProductMedias` entity based on its keys.
   */
  getByKey(
    internalOrganization: DeserializedType<T, 'Edm.Int64'>,
    fileName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTmpChannelProductMedias<T>, T> {
    return new GetByKeyRequestBuilder<RetailTmpChannelProductMedias<T>, T>(
      this.entityApi,
      {
        InternalOrganization: internalOrganization,
        FileName: fileName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTmpChannelProductMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTmpChannelProductMedias`.
   */
  update(
    entity: RetailTmpChannelProductMedias<T>
  ): UpdateRequestBuilder<RetailTmpChannelProductMedias<T>, T> {
    return new UpdateRequestBuilder<RetailTmpChannelProductMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTmpChannelProductMedias`.
   * @param internalOrganization Key property. See {@link RetailTmpChannelProductMedias.internalOrganization}.
   * @param fileName Key property. See {@link RetailTmpChannelProductMedias.fileName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpChannelProductMedias`.
   */
  delete(
    internalOrganization: BigNumber,
    fileName: string
  ): DeleteRequestBuilder<RetailTmpChannelProductMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTmpChannelProductMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTmpChannelProductMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTmpChannelProductMedias<T>
  ): DeleteRequestBuilder<RetailTmpChannelProductMedias<T>, T>;
  delete(
    internalOrganizationOrEntity: any,
    fileName?: string
  ): DeleteRequestBuilder<RetailTmpChannelProductMedias<T>, T> {
    return new DeleteRequestBuilder<RetailTmpChannelProductMedias<T>, T>(
      this.entityApi,
      internalOrganizationOrEntity instanceof RetailTmpChannelProductMedias
        ? internalOrganizationOrEntity
        : {
            InternalOrganization: internalOrganizationOrEntity!,
            FileName: fileName!
          }
    );
  }
}
