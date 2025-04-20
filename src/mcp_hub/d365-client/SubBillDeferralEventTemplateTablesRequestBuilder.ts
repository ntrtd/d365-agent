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
import { SubBillDeferralEventTemplateTables } from './SubBillDeferralEventTemplateTables';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralEventTemplateTables} entity.
 */
export class SubBillDeferralEventTemplateTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralEventTemplateTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralEventTemplateTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralEventTemplateTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralEventTemplateTables<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralEventTemplateTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralEventTemplateTables`.
   */
  create(
    entity: SubBillDeferralEventTemplateTables<T>
  ): CreateRequestBuilder<SubBillDeferralEventTemplateTables<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralEventTemplateTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralEventTemplateTables.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralEventTemplateTables.template}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralEventTemplateTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    template: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralEventTemplateTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Template: template
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralEventTemplateTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralEventTemplateTables`.
   */
  update(
    entity: SubBillDeferralEventTemplateTables<T>
  ): UpdateRequestBuilder<SubBillDeferralEventTemplateTables<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralEventTemplateTables`.
   * @param dataAreaId Key property. See {@link SubBillDeferralEventTemplateTables.dataAreaId}.
   * @param template Key property. See {@link SubBillDeferralEventTemplateTables.template}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralEventTemplateTables`.
   */
  delete(
    dataAreaId: string,
    template: string
  ): DeleteRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralEventTemplateTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralEventTemplateTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralEventTemplateTables<T>
  ): DeleteRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    template?: string
  ): DeleteRequestBuilder<SubBillDeferralEventTemplateTables<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralEventTemplateTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralEventTemplateTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Template: template!
          }
    );
  }
}
