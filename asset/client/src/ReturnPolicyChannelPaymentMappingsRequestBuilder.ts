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
import { ReturnPolicyChannelPaymentMappings } from './ReturnPolicyChannelPaymentMappings';

/**
 * Request builder class for operations supported on the {@link ReturnPolicyChannelPaymentMappings} entity.
 */
export class ReturnPolicyChannelPaymentMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnPolicyChannelPaymentMappings` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnPolicyChannelPaymentMappings` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T> {
    return new GetAllRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReturnPolicyChannelPaymentMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnPolicyChannelPaymentMappings`.
   */
  create(
    entity: ReturnPolicyChannelPaymentMappings<T>
  ): CreateRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T> {
    return new CreateRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnPolicyChannelPaymentMappings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnPolicyChannelPaymentMappings.dataAreaId}.
   * @param retailReturnPolicyChannelPolicyName Key property. See {@link ReturnPolicyChannelPaymentMappings.retailReturnPolicyChannelPolicyName}.
   * @param originalTenderTypeId Key property. See {@link ReturnPolicyChannelPaymentMappings.originalTenderTypeId}.
   * @param lineNumber Key property. See {@link ReturnPolicyChannelPaymentMappings.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ReturnPolicyChannelPaymentMappings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailReturnPolicyChannelPolicyName: DeserializedType<T, 'Edm.String'>,
    originalTenderTypeId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T> {
    return new GetByKeyRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailReturnPolicyChannel_PolicyName:
          retailReturnPolicyChannelPolicyName,
        OriginalTenderTypeId: originalTenderTypeId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnPolicyChannelPaymentMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnPolicyChannelPaymentMappings`.
   */
  update(
    entity: ReturnPolicyChannelPaymentMappings<T>
  ): UpdateRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T> {
    return new UpdateRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnPolicyChannelPaymentMappings`.
   * @param dataAreaId Key property. See {@link ReturnPolicyChannelPaymentMappings.dataAreaId}.
   * @param retailReturnPolicyChannelPolicyName Key property. See {@link ReturnPolicyChannelPaymentMappings.retailReturnPolicyChannelPolicyName}.
   * @param originalTenderTypeId Key property. See {@link ReturnPolicyChannelPaymentMappings.originalTenderTypeId}.
   * @param lineNumber Key property. See {@link ReturnPolicyChannelPaymentMappings.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnPolicyChannelPaymentMappings`.
   */
  delete(
    dataAreaId: string,
    retailReturnPolicyChannelPolicyName: string,
    originalTenderTypeId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnPolicyChannelPaymentMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnPolicyChannelPaymentMappings` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnPolicyChannelPaymentMappings<T>
  ): DeleteRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailReturnPolicyChannelPolicyName?: string,
    originalTenderTypeId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T> {
    return new DeleteRequestBuilder<ReturnPolicyChannelPaymentMappings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnPolicyChannelPaymentMappings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailReturnPolicyChannel_PolicyName:
              retailReturnPolicyChannelPolicyName!,
            OriginalTenderTypeId: originalTenderTypeId!,
            LineNumber: lineNumber!
          }
    );
  }
}
