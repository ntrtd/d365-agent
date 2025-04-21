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
import { RetailButtonGridButtonsImages } from './RetailButtonGridButtonsImages';

/**
 * Request builder class for operations supported on the {@link RetailButtonGridButtonsImages} entity.
 */
export class RetailButtonGridButtonsImagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailButtonGridButtonsImages<T>, T> {
  /**
   * Returns a request builder for querying all `RetailButtonGridButtonsImages` entities.
   * @returns A request builder for creating requests to retrieve all `RetailButtonGridButtonsImages` entities.
   */
  getAll(): GetAllRequestBuilder<RetailButtonGridButtonsImages<T>, T> {
    return new GetAllRequestBuilder<RetailButtonGridButtonsImages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailButtonGridButtonsImages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailButtonGridButtonsImages`.
   */
  create(
    entity: RetailButtonGridButtonsImages<T>
  ): CreateRequestBuilder<RetailButtonGridButtonsImages<T>, T> {
    return new CreateRequestBuilder<RetailButtonGridButtonsImages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailButtonGridButtonsImages` entity based on its keys.
   * @param id Key property. See {@link RetailButtonGridButtonsImages.id}.
   * @param buttonGridId Key property. See {@link RetailButtonGridButtonsImages.buttonGridId}.
   * @param action Key property. See {@link RetailButtonGridButtonsImages.action}.
   * @param col Key property. See {@link RetailButtonGridButtonsImages.col}.
   * @param colSpan Key property. See {@link RetailButtonGridButtonsImages.colSpan}.
   * @param displayText Key property. See {@link RetailButtonGridButtonsImages.displayText}.
   * @param fontSize Key property. See {@link RetailButtonGridButtonsImages.fontSize}.
   * @param rowNum Key property. See {@link RetailButtonGridButtonsImages.rowNum}.
   * @param rowSpan Key property. See {@link RetailButtonGridButtonsImages.rowSpan}.
   * @param pictureId Key property. See {@link RetailButtonGridButtonsImages.pictureId}.
   * @returns A request builder for creating requests to retrieve one `RetailButtonGridButtonsImages` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>,
    buttonGridId: DeserializedType<T, 'Edm.String'>,
    action: DeserializedType<T, 'Edm.Int32'>,
    col: DeserializedType<T, 'Edm.Int32'>,
    colSpan: DeserializedType<T, 'Edm.Int32'>,
    displayText: DeserializedType<T, 'Edm.String'>,
    fontSize: DeserializedType<T, 'Edm.Int32'>,
    rowNum: DeserializedType<T, 'Edm.Int32'>,
    rowSpan: DeserializedType<T, 'Edm.Int32'>,
    pictureId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailButtonGridButtonsImages<T>, T> {
    return new GetByKeyRequestBuilder<RetailButtonGridButtonsImages<T>, T>(
      this.entityApi,
      {
        ID: id,
        buttonGridId: buttonGridId,
        Action: action,
        Col: col,
        ColSpan: colSpan,
        DisplayText: displayText,
        FontSize: fontSize,
        RowNum: rowNum,
        RowSpan: rowSpan,
        PictureId: pictureId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailButtonGridButtonsImages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailButtonGridButtonsImages`.
   */
  update(
    entity: RetailButtonGridButtonsImages<T>
  ): UpdateRequestBuilder<RetailButtonGridButtonsImages<T>, T> {
    return new UpdateRequestBuilder<RetailButtonGridButtonsImages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailButtonGridButtonsImages`.
   * @param id Key property. See {@link RetailButtonGridButtonsImages.id}.
   * @param buttonGridId Key property. See {@link RetailButtonGridButtonsImages.buttonGridId}.
   * @param action Key property. See {@link RetailButtonGridButtonsImages.action}.
   * @param col Key property. See {@link RetailButtonGridButtonsImages.col}.
   * @param colSpan Key property. See {@link RetailButtonGridButtonsImages.colSpan}.
   * @param displayText Key property. See {@link RetailButtonGridButtonsImages.displayText}.
   * @param fontSize Key property. See {@link RetailButtonGridButtonsImages.fontSize}.
   * @param rowNum Key property. See {@link RetailButtonGridButtonsImages.rowNum}.
   * @param rowSpan Key property. See {@link RetailButtonGridButtonsImages.rowSpan}.
   * @param pictureId Key property. See {@link RetailButtonGridButtonsImages.pictureId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailButtonGridButtonsImages`.
   */
  delete(
    id: number,
    buttonGridId: string,
    action: number,
    col: number,
    colSpan: number,
    displayText: string,
    fontSize: number,
    rowNum: number,
    rowSpan: number,
    pictureId: number
  ): DeleteRequestBuilder<RetailButtonGridButtonsImages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailButtonGridButtonsImages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailButtonGridButtonsImages` by taking the entity as a parameter.
   */
  delete(
    entity: RetailButtonGridButtonsImages<T>
  ): DeleteRequestBuilder<RetailButtonGridButtonsImages<T>, T>;
  delete(
    idOrEntity: any,
    buttonGridId?: string,
    action?: number,
    col?: number,
    colSpan?: number,
    displayText?: string,
    fontSize?: number,
    rowNum?: number,
    rowSpan?: number,
    pictureId?: number
  ): DeleteRequestBuilder<RetailButtonGridButtonsImages<T>, T> {
    return new DeleteRequestBuilder<RetailButtonGridButtonsImages<T>, T>(
      this.entityApi,
      idOrEntity instanceof RetailButtonGridButtonsImages
        ? idOrEntity
        : {
            ID: idOrEntity!,
            buttonGridId: buttonGridId!,
            Action: action!,
            Col: col!,
            ColSpan: colSpan!,
            DisplayText: displayText!,
            FontSize: fontSize!,
            RowNum: rowNum!,
            RowSpan: rowSpan!,
            PictureId: pictureId!
          }
    );
  }
}
