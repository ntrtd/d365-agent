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
import { ElectronicPaymentInstructions } from './ElectronicPaymentInstructions';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentInstructions} entity.
 */
export class ElectronicPaymentInstructionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentInstructions<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentInstructions` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentInstructions` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentInstructions<T>, T> {
    return new GetAllRequestBuilder<ElectronicPaymentInstructions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentInstructions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentInstructions`.
   */
  create(
    entity: ElectronicPaymentInstructions<T>
  ): CreateRequestBuilder<ElectronicPaymentInstructions<T>, T> {
    return new CreateRequestBuilder<ElectronicPaymentInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentInstructions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentInstructions.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentInstructions.layoutGroupId}.
   * @param instruction Key property. See {@link ElectronicPaymentInstructions.instruction}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentInstructions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    instruction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentInstructions<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicPaymentInstructions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutGroupId: layoutGroupId,
        Instruction: instruction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentInstructions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentInstructions`.
   */
  update(
    entity: ElectronicPaymentInstructions<T>
  ): UpdateRequestBuilder<ElectronicPaymentInstructions<T>, T> {
    return new UpdateRequestBuilder<ElectronicPaymentInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentInstructions`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentInstructions.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentInstructions.layoutGroupId}.
   * @param instruction Key property. See {@link ElectronicPaymentInstructions.instruction}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentInstructions`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    instruction: string
  ): DeleteRequestBuilder<ElectronicPaymentInstructions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentInstructions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentInstructions` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentInstructions<T>
  ): DeleteRequestBuilder<ElectronicPaymentInstructions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    instruction?: string
  ): DeleteRequestBuilder<ElectronicPaymentInstructions<T>, T> {
    return new DeleteRequestBuilder<ElectronicPaymentInstructions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentInstructions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            Instruction: instruction!
          }
    );
  }
}
